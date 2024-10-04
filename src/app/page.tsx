"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import trustwallet from "@public/trustwallet.png"; // Nouvelle image
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
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        {/* Nouveau ConnectButton avec Trust Wallet uniquement */}
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            wallets={wallets} // Uniquement Trust Wallet
    
            connectModal={{ size: "compact" }} // Modal compact
            
          />
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={trustwallet} // Utilise l'image correcte ici
        alt="Trust Wallet Icon"
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 10px #0000ff)", // Aura bleue discrète
        }}
      />
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-blue-500">
        Trust 
        <span className="text-zinc-300 inline-block mx-1"> </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Wallet </span>
      </h1>
    </header>
  );
}
