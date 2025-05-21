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
  className="md:hidden p-3 z-50 relative"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
>
  <svg 
    className="w-7 h-7 text-white" 
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

{/* Overlay (clique fora para fechar) */}
{isMenuOpen && (
  <div 
    className="fixed inset-0 bg-black/50 z-40 md:hidden" 
    onClick={() => setIsMenuOpen(false)}
  />
)}

{/* Menu */}
<div
  id="btn-menu"
  className={`fixed top-0 left-0 right-0 bg-cyan-900 z-50 transition-all duration-300 ease-in-out md:relative md:flex md:bg-transparent ${
    isMenuOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-full'
  }`}
>
  <ul
    id="menu-nav"
    className="flex flex-col md:flex-row gap-4 md:items-center md:justify-end w-full px-6 py-4 md:p-0 text-base mr-5"
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