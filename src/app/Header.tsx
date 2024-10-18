"use client"; // Indique que ce fichier est un Client Component

import { useState } from 'react';
import Image from "next/image";
import logo from "@public/trustwallet.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-5">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="AMLCheck Logo"
            width={40}
            height={40}
          />
          <div className="logo text-xl sm:text-2xl font-bold text-blue-600">
            AMLCheck
            <span className="block text-sm font-normal text-gray-600">By Trust Wallet</span>
          </div>
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="sm:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
  className={`${
    isMenuOpen ? 'block' : 'hidden'
  } sm:flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent z-50 shadow-lg sm:shadow-none`}
>
  <a href="/products" className="text-gray-700 px-4 py-2 block">Products</a>
  <a href="/rates" className="text-gray-700 px-4 py-2 block">Rates</a>
  <a href="/analysis" className="text-gray-700 px-4 py-2 block">Analysis</a>
  <a href="/faq" className="text-gray-700 px-4 py-2 block">FAQ</a>
  <a href="/blog" className="text-gray-700 px-4 py-2 block">Blog</a>
  <a href="/about-us" className="text-gray-700 px-4 py-2 block">About Us</a>
  <a href="/login" className="cta-button bg-blue-600 text-white px-4 py-2 rounded-lg block text-center">Sign Up</a>
</div>

      </nav>
    </header>
  );
}
