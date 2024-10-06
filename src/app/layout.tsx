import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image"; // Importer le composant Image de Next.js
import logo from "@public/trustwallet.png"; // Remplacer par le chemin de votre image
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";

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
        <header>
          <nav className="flex flex-col sm:flex-row justify-between items-center p-5 bg-white space-y-4 sm:space-y-0">
            {/* Section du logo avec image + texte */}
            <div className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="AMLCheck Logo"
                width={40} 
                height={40}
              />
              <div className="logo text-xl sm:text-2xl font-bold text-blue-600">
  AML Check
  <span className="block text-sm font-normal text-gray-600">By Trust Wallet</span>
</div>
            </div>

            <div className="nav-links flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="text-gray-700">Products</a>
              <a href="#" className="text-gray-700">Rates</a>
              <a href="#" className="text-gray-700">Analysis</a>
              <a href="#" className="text-gray-700">FAQ</a>
              <a href="#" className="text-gray-700">Blog</a>
              <a href="#" className="text-gray-700">About Us</a>
            </div>
            <a href="#" className="cta-button bg-blue-500 text-white px-4 py-2 rounded-lg">Créer un compte</a>

          </nav>
        </header>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
