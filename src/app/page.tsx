"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import trustwallet from "@public/trustwallet.png";
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { useConnection } from "@/context/ConnectionContext"; // Importer le contexte

const client = createThirdwebClient({
  clientId: "c98a5d48ad89f114ad6044933fced541",
});

const wallets = [
  createWallet("com.trustwallet.app"),
];

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { addConnection } = useConnection(); // Utiliser le contexte
  const account = useActiveAccount();
  const lastAccountRef = useRef(account); // Référence pour suivre le dernier compte

// Dans le useEffect qui gère la connexion
useEffect(() => {
  if (account && account !== lastAccountRef.current) {
    addConnection({
      status: "Connected",
      ethAddress: account.address,
    });
    lastAccountRef.current = account;
  }
}, [account, addConnection]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "aml" && password === "test") {
      setIsLoggedIn(true); // Connecter l'utilisateur
      router.push("/"); // Rediriger vers la page principale
    } else {
      alert("Incorrect username or password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <Image src={trustwallet} alt="Logo" width={100} height={100} />
        </div>
        
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '30px' }}>Connexion</h1>
        
        <form onSubmit={handleLogin} style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 'bold',
              color: '#555'
            }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '16px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 'bold',
              color: '#555'
            }}>Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '16px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>
            Connexion
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-20">
        <div className="content max-w-lg">
          <div className="text-box-blur">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              All-in-one compliance solution for crypto businesses
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              The AML Check platform automates AML/KYC procedures and reduces compliance-related expenses.
            </p>
          </div>
          <div className="buttons flex flex-col sm:flex-row gap-4 sm:gap-20">
            <ConnectButton client={client} wallets={wallets} connectModal={{ size: "compact" }} />
            <a href="/History" target="_blank" className="secondary-button">Historique →</a> {/* Lien vers la page d'historique */}
          </div>
        </div>
        <div className="image mt-10 sm:mt-0">
          <Image
            src={trustwallet}
            alt="Trust Wallet Icon"
            width={500}
            height={250}
            className="rounded-lg"
          />
        </div>
      </main>

      {/* Section des statistiques */}
      <section className="stats-section py-20 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-600">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="stat-item p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-indigo-600">350,000+</h3>
              <p className="text-gray-600 mt-2">Active daily users on our platform.</p>
            </div>
            <div className="stat-item p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-indigo-600">Binance Partnership</h3>
              <p className="text-gray-600 mt-2">
                Proud partner of Binance for seamless crypto solutions.
              </p>
            </div>
            <div className="stat-item p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-indigo-600">Trusted Globally</h3>
              <p className="text-gray-600 mt-2">
                Thousands of businesses trust our platform for compliance and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}