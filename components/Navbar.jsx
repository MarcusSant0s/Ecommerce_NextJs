'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useStateContext } from '@/context/StageContext';
import { Cart } from './';
import Icon from './Icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  // Detectar rolagem
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animação do carrinho
  useEffect(() => {
    if (totalQuantities > 0) {
      setIsAnimating(true);

      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duração da animação

      return () => clearTimeout(timer);
    }
  }, [totalQuantities]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-500 ease-in-out ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icon className="ml-1 mt-1 h-12 w-12 rounded-xl" />
          <h1 className="text-xl font-bold text-gray-700">Brenda Nunes</h1>
        </Link>

        {/* Categorias */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <Link href="/products" className="hover:text-pink-500">
            Peças
          </Link>
          <Link href='/' className="hover:text-pink-500">
          Lojas
          </Link>
          <Link href="/" className="hover:text-pink-500">
          Sobre Nós
          </Link>
        </div>

        {/* Carrinho */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCart(!showCart)}
            className={`relative text-2xl text-pink-600 hover:text-pink-500 ${
              isAnimating ? 'animate-bounce-scale' : ''
            }`}
          >
            <FaShoppingCart />
            {totalQuantities > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-pink-500 text-white rounded-full flex items-center justify-center">
                {totalQuantities}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navbar móvel para telas pequenas */}
      <div className="block md:hidden px-4 py-2 bg-white border-t border-gray-200">
        <div className="flex justify-around text-gray-600 font-medium">
        <Link href="/products" className="hover:text-pink-500">
            Peças
          </Link>
          <Link href='/' className="hover:text-pink-500">
          Lojas
          </Link>
          <Link href="/" className="hover:text-pink-500">
          Sobre Nós
          </Link>
        </div>
      </div>

      {showCart && (
        <div
          className="absolute top-0 z-50 w-full h-screen bg-gray-400/45"
          onClick={() => setShowCart(!showCart)}
        >
          <Cart />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
