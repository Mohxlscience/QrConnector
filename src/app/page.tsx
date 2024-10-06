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
    <main className="flex justify-between items-center p-20">
      <div className="content max-w-lg">
         <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          Solution de conformité tout-en-un pour les entreprises de crypto
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          La plateforme AMLBot automatise les procédures AML / KYC et réduit les dépenses liées à la conformité.
        </p>
        <div className="buttons">
          {/* Remplace le lien par le bouton ConnectButton */}
          <ConnectButton
            
            client={client}
            wallets={wallets} // Uniquement Trust Wallet
            connectModal={{ size: "compact" }} // Modal compact
          />
          <a href="/chat" className="secondary-button">Bot de chat →</a>
        </div>
      </div>
      <div className="image">
        <Image
          src={trustwallet}
          alt="Trust Wallet Icon"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
