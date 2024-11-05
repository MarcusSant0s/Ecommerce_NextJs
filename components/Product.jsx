'use client';
import React from 'react'
import { urlFor } from '../lib/client';
import Link from 'next/link';
import Image from 'next/image';

const Product = ({ product }) => {
  const { name, slug, price, category, image } = product ?? {}
  return (
    <div className='group mx-1 p-2 max-h-96   bg-white border hover:border-black rounded-lg shadow-md drop-shadow-md'>
      <Link href={`products/${slug.current}`}>
        <div className='h-3/4  relative'>

          <Image
            src={urlFor(image && image[0]).url()}
            width={300}
            height={300}
            alt="card-image"
            className='  rounded-t-2xl p-1 h-full object-cover mx-auto' />

          <h2 className='text-base group-hover:tracking-widest group-hover:text-gray-800   text-gray-500  px-1 bg-gray-100  group-hover:bg-white absolute bottom-0 group-hover:bottom-2 transition-all ease-linear'>R${price}</h2>
        </div>

        <div className=' h-1/4  flex flex-col justify-center '>
          <h4 className='text-md text-gray-500 text-left truncate'>{name}</h4>

          <h5 cçassname='text-gray-500'>{category}</h5>
          {/* <button className=' w-full text-base font-medium  text-white bg-pink-500 px-1   w-1/2  rounded-lg'>Bag it</button>  */}
          {/* <p className='text-base hidden sm:block sm:text-left'>Product Description</p> */}
          {/* {discont && <p className='text-base  text-left'>{discont}</p>} */}
        </div>
      </Link>
    </div>

  )
}

export default Product
