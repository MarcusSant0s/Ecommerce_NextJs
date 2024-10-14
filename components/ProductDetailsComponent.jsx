'use client'

import React, { useState } from 'react'


import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import { useStateContext } from '@/context/StageContext';

import { urlFor } from '@/lib/client';


const ProductDetailsComponent = ({ product}) => {

  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  return (

    <section className='mt-10 w-full  flex flex-col items-center md:flex-row md:mt-20 md:justify-center md:items-start md:px-4'>




      <div className='md:max-w-md'>
        <h1 className='text-3xl font-bold'>
          {name}
        </h1>
        <Image src={urlFor(image && image[index]).url()} width={400} height={300} alt="product-image" 
        className='w-full  h-full object-cover'
        priority />
        <div className="grid grid-cols-4">
          {image?.map((item, i) => (
            <Image
            alt='product-image'
              key={i}
              src={urlFor(item).url()}
              width={400}
              height={400}
              className={`cursor-pointer ${i === index ? 'border-2 border-black' : 'border-none'
                }`}
              onMouseEnter={() => setIndex(i)}
            />
          ))}

        </div>
      </div>

      <div className='w-full p-4'>


        <div>
          <h4 className='font-semibold'>Detalhes</h4>
          <p className=' '>{details}</p>
        </div>


          <p className=' mt-3 font-semibold'>R${price}</p>

          <div className='mt-3 flex gap-5 items-center'>
            <h3>
              Quantity:
            </h3>
            <p className='flex items-center gap-3 text-3xl border  w-max'>
              <span className='text-red-500'
                onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='font-light'
                >
                {qty}
              </span>
              <span className='text-green-500'
                onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='w-full flex items-center justify-around mt-3 md:w-max gap-4 text-2xl'> 
            <button type='button' className='' onClick={() => onAdd(product, qty)}>
              Add to Card
            </button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>


      
      </div>



    </section>

  )
}

export default ProductDetailsComponent
