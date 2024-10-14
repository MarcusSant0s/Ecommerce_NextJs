'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { useStateContext } from '@/context/StageContext';
import  Image  from 'next/image'

import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'


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
    <div className='cart-wrapper' ref={cartRef} >
      <div className='cart-container'>
        <button type='button' className='cart-heading'
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />

            <h3> Your shopping bag is empty  </h3>
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'>
                Continue Shopping
              </button>

            </Link>

          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product' key={item._id}>
              <Image src={urlFor(item?.image[0]).url()}
                alt="image-cart"
                className='cart-product-image'
                width={100}
                height={100}
              />
              <div className='item-desc'>
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h5>{item.price}</h5>
                </div>
                <div className="flex bottom">
                  <div >
                    <p className='quantity-desc'>
                      <span className='minus'
                        onClick={() => toggleCartItemsQuantity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className='num'
                      >
                        {item.quantity}
                      </span>
                      <span className='plus'
                        onClick={() => toggleCartItemsQuantity(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='remove-item'
                    onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>R${totalPrice}</h3>

            </div>
            <div className="btn-container">
              <button type='button'
                className='btn'
                onClick={handleCheckout}>
                Pay With Stripe

              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart