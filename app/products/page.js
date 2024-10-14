import React from 'react'
import { FilterProducts, Product } from '@/components'
import { client } from '@/lib/client'
import Image from 'next/image'
 

export default async function page (){

  const query = `*[_type == "product" ]{
    image, name, slug, discont, price, _id,
    "category": category -> category
  }`;
     
 

  let products = await client.fetch(query)
 
  return(  
  
  <div className="mt-20">
      {/* Container */} 
        <div className="mx-0 ">  
         <div className="flex  "> 
           <div className={`w-full ps-4  rounded-md flex items-center justify-center bg-gray-100`}>
        <div className={`flex flex-col w-full  `}  >
           {/* Sidebar Filters */} 
        <FilterProducts/>
 
 {/* Product List */}
      <div style={{ width: 'calc(100vw - 3vw)' }} className="grid max-[380px]:grid-cols-1 rows--height grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:p-2 md:gap-2  min-h-screen   border rounded-md border-dashed w-full h-full pt-2">
     
      {products.map((productsData) => (
        <Product key={productsData._id} product={productsData} />
        

      ))}
  
      </div>
 
          
        </div>
      </div>
    </div>
  </div>

       
    </div>
 
 
  )
}
 
 