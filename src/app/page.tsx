"use client";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import trustwallet from "@public/trustwallet.png"; // Utilise l'image Trust Wallet
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

// Créer le client Thirdweb
const client = createThirdwebClient({
  clientId: "c98a5d48ad89f114ad6044933fced541", // Remplace par ton ID client valide
});

// Spécifie uniquement Trust Wallet
const wallets = [
  createWallet("com.trustwallet.app"), // Trust Wallet seulement
];

export default function Home() {
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
            <a href="#" className="secondary-button">Bot de chat →</a>
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
