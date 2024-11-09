'use client'

import React, { useState } from 'react'


import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import { useStateContext } from '@/context/StageContext';
import {ProductInfo } from '@/components';
import { urlFor } from '@/lib/client';


const ProductDetailsComponent = ({ product}) => {

  const { image, name, details, price } = product ?? {};

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  return (

    <section className='mt-14 w-full  flex flex-col items-center md:flex-row md:mt-20 md:justify-center md:items-start md:px-4'>




      <div className='md:max-w-md border-b pb-2'>
        <h1 className='text-xl text-gray-400'>
         Category
        </h1>
        <Image src={urlFor(image && image[index]).url()} width={400} height={300} alt="product-image" 
        className='w-full  h-full object-cover'
        priority />
        <div className="grid grid-cols-4 px-1">
          {image?.map((item, i) => (
            <Image
            alt='product-image'
              key={i}
              src={urlFor(item).url()}
              width={400}
              height={400}
              className={`cursor-pointer rounded-3xl  ${i === index ? 'bg-pink-300 ' : 'bg-transparent'
                }`}
              onMouseEnter={() => setIndex(i)}
            />
          ))}

        </div>
      </div>

      <div className='w-full p-4'>


        <div className=' border-b-2 border-gray-200'>
          <h4 className='font-semibold'>Detalhes</h4>
          <p className='text-xl '>{name}</p>
          
        </div>


          <p className=' mt-3 font-semibold'>R${price}</p>

 
          <div className='w-full flex items-center justify-around mt-3 md:w-max gap-4 text-2xl'> 
            <button type='button' className='font-medium bg-pink-300 w-full py-2 rounded-lg' onClick={() => onAdd(product, qty)}>
              Add to Card
            </button>
   
          </div>

          <ProductInfo details={details}/>
      
      </div>



    </section>

  )
}

export default ProductDetailsComponent
