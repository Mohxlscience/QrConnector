"use client";
import { useConnection } from "@/context/ConnectionContext";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const { connectionHistory } = useConnection();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marquer que le composant est monté côté client
  }, []);

  if (!isClient) {
    return null; // Ne rien rendre côté serveur
  }

  return (
    <div className="connection-history-section py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-600">
          Connection History
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="history-list mt-8">
            {connectionHistory.map((entry, index) => (
              <div key={index} className="history-item p-4 bg-gray-100 rounded-lg mb-2">
                <p className="text-gray-700">
                  {entry.timestamp} - {entry.status} {entry.ethAddress && `- ETH Address: ${entry.ethAddress}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}