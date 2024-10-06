"use client"; // Indique que ce fichier est un Client Component

import { useState } from 'react';
import Image from "next/image";
import logo from "@public/trustwallet.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center p-5 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="AMLCheck Logo"
            width={40}
            height={40}
          />
          <div className="logo text-xl sm:text-2xl font-bold text-blue-600">
            AMLCheck
          </div>
        </div>
        
        <button 
          className="sm:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Icône hamburger */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
          </svg>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4`}>
          <a href="/produits" className="text-gray-700">Produits</a>
          <a href="/tarifs" className="text-gray-700">Tarifs</a>
          <a href="/analyses" className="text-gray-700">Analyses</a>
          <a href="/faq" className="text-gray-700">FAQ</a>
          <a href="/blog" className="text-gray-700">Blog</a>
          <a href="/a-propos" className="text-gray-700">À propos de nous</a>
          <a href="/inscription" className="cta-button bg-gray-800 text-white px-4 py-2 rounded-lg">Créer un compte</a>
        </div>
      </nav>
    </header>
  );
}
