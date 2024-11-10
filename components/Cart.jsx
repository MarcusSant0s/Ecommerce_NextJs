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
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemsQuantity, onRemove } = useStateContext();

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


    alert('Stripe session created!')


    stripe.redirectToCheckout({ sessionId: data.id });

  }

  return (
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
          <div className='flex flex-col  mt-10'>
            <AiOutlineShopping size={150}  className='mx-auto'/>

            <h3 className='mx-auto'> Seu carrinho está vazio  </h3>
            <Link href='/' className='mx-auto'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='justify-self-center bg-red-400'>
                Continue descobrindo
              </button>

            </Link>

          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='flex p-2' key={item._id}>
              <Image src={urlFor(item?.image[0]).url()}
                alt="image-cart"
                className='cart-product-image'
                width={100}
                height={100}
                />
              <div className='w-full flex flex-col justify-between'>
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h5>{item.price}</h5>
                </div>
                <div className="flex justify-between">
                  <div className=' border  gap-2  rounded-lg p-0.5' >
                    <p className='flex items-center gap-2'>
                      <span className=' rounded-s-md'
                        onClick={() => toggleCartItemsQuantity(item._id, 'dec')}>
                        <AiOutlineLeft />
                      </span>
                      <span className=''
                      >
                        {item.quantity}
                      </span>
                      <span className=' rounded-e-md'
                        onClick={() => toggleCartItemsQuantity(item._id, 'inc')}>
                        <AiOutlineRight />
                      </span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='mr-10'
                    onClick={() => onRemove(item)}>
                    <FaRegTrashAlt  className='text-2xl'/>
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="ml-5">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>R${totalPrice}</h3>

            </div>
            <div className="btn-container">
              <button type='button'
                className='mt-4 w-full text-white bg-green-400 max-w-64 py-1 text-2xl font-medium rounded'
                onClick={handleCheckout}>
                Pay With Stripe

              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  </div>
  )
}

export default Cart