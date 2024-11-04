 


import { FilterProducts, ProductsList} from '@/components';
import { client } from '@/lib/client';

 
 
export default async function page ({params}){
 

  const query =  `*[_type == "product" ]| order(_createdAt desc){
    image, name, slug, discont, price, _id,
    "category": category -> category
  }[0..50]`;

  let products = await client.fetch(query)
  // const headersList = await headers()
  // const limit = headersList.get('limit')
  // const page = headersList.get('page')

 

  // const productsInfo = chunk(products, limit)
  // const productPerPage =  productsInfo[page  ]
  // console.log(params)
 
  return(  
  
  <div className="mt-20"> 
        <div className="mx-0 ">  
         <div className="flex  "> 
           <div className={`w-full ps-4  rounded-md flex items-center justify-center bg-gray-100`}>
                <div className='flex flex-col w-full'>
                  {/* Sidebar Filters */} 
                  <FilterProducts/>  
                  {/* Product List */} 
                  <ProductsList query={query} products={products} /> 
                </div>
      </div>
    </div>
  </div>
</div>
 
 
  )
}
 
 