"use client";
import { useConnection } from "@/context/ConnectionContext";

export default function HistoryPage() {
  const { connectionHistory, loading } = useConnection();

  if (loading) {
    return <div className="text-center p-8">Chargement historique...</div>;
  }

  return (
    <div className="connection-history-section py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-600">
          Historique Connexions
        </h2>
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {connectionHistory.map((entry, index) => (
            <div key={index} className="history-item p-4 bg-gray-100 rounded-lg mb-2">
              <p className="text-gray-700 text-left">
                <span className="font-semibold">{entry.timestamp}</span>
                <br />
                Status: {entry.status}
                {entry.ethAddress && (
                  <>
                    <br />
                    Adresse: <span className="font-mono">{entry.ethAddress}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}