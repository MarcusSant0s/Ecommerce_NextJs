'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { useStateContext } from '@/context/StageContext';
import  Image  from 'next/image'

import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';
import { FaRegTrashAlt } from "react-icons/fa";


const Cart = () => {

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, showCart, toggleCartItemsQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    console.log(cartItems);
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;


    const data = await response.json();


    console.log('Stripe session created!')


    stripe.redirectToCheckout({ sessionId: data.id });

  }

  return (
    <div
    className={`fixed top-0 right-0 h-full w-full bg-gray-800 bg-opacity-50 transition-transform ${
      showCart ? 'translate-x-0' : 'translate-x-full'
    }`}
    onClick={() => setShowCart(false)}
  >
    <div className='h-full w-full flex md:justify-end'>

    <div className='w-full bg-white   flex flex-col md:flex-end md:w-3/4' ref={cartRef} >
      <div className='cart-container'>
        <button type='button' className='flex mt-5 mb-5  shadow-md shadow-black/20 w-full pb-2'
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft className='text-4xl ml-5'/>
          <span className='self-center text-lg'>Seu carrinho</span>
          <span className='self-center ml-1  text-md'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div key={cartItems._id} className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg shadow-md">
            <AiOutlineShopping size={100} className="text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-600">Seu carrinho está vazio</h3>
            <p className="text-sm  text-gray-500">Vamos continuar juntos? Tem mais coisas lindas esperando por você! 🛍️</p>
            <Link href="/">
              <button
                type="button"
                className="mt-4 px-6 py-2 text-sm font-medium text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition"
                onClick={() => setShowCart(false)}
              >
                Continuar explorando
              </button>
            </Link>
          </div>
        )}


        <div className='bg-white'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <Image
    src={urlFor(item?.image[0]).url()}
    alt="image-cart"
    className="rounded-lg"
    width={80}
    height={80}
  />
  <div className="flex flex-col w-full">
    <h5 className="text-lg font-semibold text-gray-700">{item.name}</h5>
    <h5 className="text-sm text-gray-500">R${item.price}</h5>
    <div className="flex items-center gap-2 mt-2">
      <button
        className="px-2 py-1 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => toggleCartItemsQuantity(item._id, 'dec')}
      >
        <AiOutlineLeft />
      </button>
      <span className="text-gray-700">{item.quantity}</span>
      <button
        className="px-2 py-1 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => toggleCartItemsQuantity(item._id, 'inc')}
      >
        <AiOutlineRight />
      </button>
      <button
        className="ml-auto text-red-500 hover:text-red-600"
        onClick={() => onRemove(item)}
      >
        <FaRegTrashAlt className="text-lg" />
      </button>
    </div>
  </div>
</div>

          ))}
          
          {cartItems.length >= 1 && (
          <div key={cartItems._id}className="mt-5 px-2 pb-2">
            <div className="total">
              <h3>Total:</h3>
              <h3>R${totalPrice}</h3>

            </div>
            <div className="btn-container">

            <button
                type="button"
                className="mt-4 w-full px-4 py-2 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
                onClick={handleCheckout}
              >
                Levar para casa 🛍️
              </button>

            </div>
          </div>
        )}
        
        </div>


      </div>
    </div>
  </div>
  </div>
  )
  
}

export default Cart