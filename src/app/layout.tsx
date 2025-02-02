import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import Header from "./Header";  // Importation du Header
import { ConnectionProvider } from "@/context/ConnectionContext";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '800'] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust Wallet",
  description: "The AML Check platform automates AML/KYC procedures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/trustwallet.png" type="image/png" />
      </head>
      <body className={poppins.className}>
        <Header />  {/* Utilisation du Header */}
        <ConnectionProvider>
        <ThirdwebProvider>
          {children}  {/* Contenu principal */}
        </ThirdwebProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
