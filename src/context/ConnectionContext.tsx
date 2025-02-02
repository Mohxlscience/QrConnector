"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ConnectionEntry = {
  timestamp: string;
  status: string;
};

type ConnectionContextType = {
  connectionHistory: ConnectionEntry[];
  addConnection: (entry: ConnectionEntry) => void;
};

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const ConnectionProvider = ({ children }: { children: ReactNode }) => {
  // Charger l'historique depuis localStorage lors de l'initialisation
  const [connectionHistory, setConnectionHistory] = useState<ConnectionEntry[]>(() => {
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem("connectionHistory");
      return savedHistory ? JSON.parse(savedHistory) : [];
    }
    return [];
  });

  // Sauvegarder l'historique dans localStorage à chaque mise à jour
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("connectionHistory", JSON.stringify(connectionHistory));
    }
  }, [connectionHistory]);

  const addConnection = (entry: ConnectionEntry) => {
    setConnectionHistory((prevHistory) => [...prevHistory, entry]);
  };

  return (
    <ConnectionContext.Provider value={{ connectionHistory, addConnection }}>
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