import React from 'react'
import brinc from '../public/brinc.jpg'
import ring from '../public/ring.jpg'
import bracel from '../public/bracel.jpg'
import necklace from '../public/necklace.jpg'

import Image from 'next/image'


const CategoryList = () => {
  return (
    <div>

      
<section> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-10 sm:py-20"> {/* Title */} <h2 className="text-3xl font-bold md:text-5xl mb-5">Confira </h2>
{/* Content */} <div className="mx-auto grid justify-items-stretch gap-4 sm:grid-cols-2 lg:gap-10"> {/* Item */} 
  
     <a href="#" className="hover:scale-105 transition-all  ease-in  relative flex h-[300px] items-end [grid-area:1/1/3/2] sm:h-auto">
        <Image src={necklace} alt="" className="inline-block h-full w-full rounded-lg object-cover " />
        <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl"> Colares </p>
 
        </div>
      </a> {/* Item */} <a href="#" className="hover:scale-105 transition-all  ease-in relative flex h-[400px] items-end py-1">
        <Image src={ring} alt="" className="inline-block h-full w-full rounded-lg object-cover " />
        <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl mb-4">Anéis</p>
           
 
        </div>
      </a> {/* Item */} <a href="#" className="hover:scale-105 transition-all  ease-in relative flex h-[400px] items-end py-1">
        <Image src={brinc} alt="" className="inline-block h-full w-full rounded-lg object-cover     " />
        <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl">Brincos</p> 
 
        </div>
      </a>{/* Item */} <a href="#" className="hover:scale-105 transition-all  ease-in relative flex h-[300px] items-end sm:col-span-2">
      <Image src={bracel} alt="" className="inline-block h-full w-full rounded-lg object-cover " />

        <div className=" hover:scale-105 transition-all  ease-in absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl">Pulseiras</p>
 
        </div>
      </a>      
    </div>
  </div>
</section>
    </div>
  )
}

export default CategoryList
