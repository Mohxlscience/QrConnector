"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { db, collection, query, onSnapshot, addDoc, serverTimestamp } from "@/lib/firebase";

type ConnectionEntry = {
  timestamp: string;
  status: string;
  ethAddress?: string;
};

type ConnectionContextType = {
  connectionHistory: ConnectionEntry[];
  addConnection: (entry: Omit<ConnectionEntry, "timestamp">) => Promise<void>;
  loading: boolean;
};

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const ConnectionProvider = ({ children }: { children: ReactNode }) => {
  const [connectionHistory, setConnectionHistory] = useState<ConnectionEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "connections"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const entries: ConnectionEntry[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        entries.push({
          timestamp: data.timestamp?.toDate().toLocaleString() || "",
          status: data.status,
          ethAddress: data.ethAddress
        });
      });
      setConnectionHistory(entries);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addConnection = async (entry: Omit<ConnectionEntry, "timestamp">) => {
    try {
      await addDoc(collection(db, "connections"), {
        ...entry,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error("Erreur d'ajout de connexion:", error);
    }
  };

  return (
    <ConnectionContext.Provider value={{ connectionHistory, addConnection, loading }}>
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnection = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error("useConnection must be used within a ConnectionProvider");
  }
  return context;
};