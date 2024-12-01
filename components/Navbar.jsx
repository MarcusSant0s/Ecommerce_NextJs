 'use client';

import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useStateContext } from '@/context/StageContext';
import { Cart } from './';
import Icon from './Icon';

const Navbar = () => { 

  const { showCart, setShowCart, totalQuantities } = useStateContext();
 
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-500 ease-in-out"
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icon className="ml-1 mt-1 h-12 w-12 rounded-xl" />
          <h1 className="text-xl font-bold text-gray-700">Brenda Nunes</h1>
        </Link>

        {/* Categorias */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium text-xl">
          <Link href="/products" className="hover:text-pink-500">
            Peças
          </Link>
          <Link href='https://www.google.com/maps/place/R.+Sete+de+Setembro,+127+-+01+-+Centro,+Ca%C3%A7apava+-+SP,+12281-620/data=!4m2!3m1!1s0x94cc51708a515071:0x39aa5670174c3422?sa=X&ved=1t:242&hl=en&ictx=111' className="hover:text-pink-500">
          Lojas
          </Link> 
        </div>

        {/* Carrinho */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative text-2xl text-pink-600 hover:text-pink-500" 
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
        <Link href="/products" className="hover:text-pink-500 ">
            Peças
          </Link>
          <Link href='https://www.google.com/maps/place/R.+Sete+de+Setembro,+127+-+01+-+Centro,+Ca%C3%A7apava+-+SP,+12281-620/data=!4m2!3m1!1s0x94cc51708a515071:0x39aa5670174c3422?sa=X&ved=1t:242&hl=en&ictx=111' className="hover:text-pink-500">
          Lojas
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