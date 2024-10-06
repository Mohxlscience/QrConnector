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
    <main className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-20">
      <div className="content max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          Solution de conformité tout-en-un pour les entreprises de crypto
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          La plateforme AMLCheck automatise les procédures AML / KYC et réduit les dépenses liées à la conformité.
        </p>
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
  );
}
