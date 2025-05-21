'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-gradient w-full h-16 px-4 flex items-center justify-between bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <Image
        src="/global-logo.svg"
        alt="Lacrei Saúde"
        width={170}
        height={48}
        className="h-8 w-auto drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.6))"
      />
      
      {/* Botão do menu mobile */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu */}
      <div
  id="btn-menu"
  className={`md:flex grow basis-full overflow-hidden transition-all duration-300 ${
    isMenuOpen ? 'max-md:block' : 'max-md:hidden'
  }`}
>
  <ul
    id="menu-nav"
    className="flex flex-col md:flex-row gap-4 md:items-center md:justify-end w-full p-0 text-base max-md:mt-2 mr-8"
  >
    <li>
      <a href="#" className="text-white hover:text-cyan-100 transition-colors font-bold">
        Profissionais de Saúde
      </a>
    </li>
    <li>
      <a href="#" className="text-white hover:text-cyan-100 transition-colors font-bold">
        Nossa Missão
      </a>
    </li>
    <li>
      <a href="#" className="text-white hover:text-cyan-100 transition-colors font-bold">
        FAQ
      </a>
    </li>
  </ul>
</div>
    </nav>
  );
} 