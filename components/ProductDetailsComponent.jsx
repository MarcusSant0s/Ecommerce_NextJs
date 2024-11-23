'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductInfo } from '@/components';
import { urlFor } from '@/lib/client';
import AddToCartButton from './AddCartButton';

const ProductDetailsComponent = ({ product }) => {
  const { image, name, details, price, category } = product ?? {};
  const [index, setIndex] = useState(0);

  return (
    <section className="mt-4 w-full flex flex-col items-center md:flex-row md:mt-24 md:justify-center md:items-start md:px-10">
      <div className="md:max-w-2xl border-b pb-2">
        <h1 className="text-xl text-gray-400">
          Category {'>'} {category}
        </h1>
        <Image
          src={urlFor(image && image[index]).url()}
          width={400}
          height={300}
          alt="product-image"
          className="w-full h-full object-cover bg-gray-100 rounded-md"
          priority
        />
        <div className="grid grid-cols-4 px-1 mt-2">
          {image?.map((item, i) => (
            <Image
              alt="product-image"
              key={i}
              src={urlFor(item).url()}
              width={400}
              height={400}
              className={`cursor-pointer rounded-3xl ${
                i === index ? 'bg-pink-600' : 'bg-transparent'
              }`}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full p-4 md:p-15">
        <div className="border-b-2 border-gray-200">
          <h4 className="font-semibold">Detalhes</h4>
          <p className="text-xl ">{name}</p>
        </div>

        <p className="mt-3 font-semibold bg-red-300 w-max rounded-lg px-2 py-1">
          R${price}
        </p>

        <div className="w-full flex items-center justify-around mt-3 md:w-max gap-4 text-lg md:text-2xl">
          <AddToCartButton product={product} />
        </div>

        <ProductInfo details={details} />
      </div>
    </section>
  );
};

export default ProductDetailsComponent;
