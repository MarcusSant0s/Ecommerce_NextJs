'use client';

import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { useStateContext } from '@/context/StageContext';

const AddToCartButton = ({ product }) => {
  const { qty, onAdd, setShowCart } = useStateContext();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    onAdd(product, qty); 
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Tempo da animação
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`relative font-medium border border-pink-600 text-pink-600 w-72 px-4 py-2 rounded-lg transition-all duration-500 ${
        isAnimating
          ? 'bg-pink-600 text-white scale-125 '
          : 'hover:bg-pink-100 scale-100'
      }`}
    >
      {isAnimating ? (
        <div className="flex items-center justify-center">
          <AiOutlineCheck className="text-white text-3xl animate-fade-in" />
        </div>
      ) : (
        'Adicionar ao carrinho'
      )}
    </button>
  );
};

export default AddToCartButton;
