


import { FilterProducts, ProductsList } from '@/components';
import { client } from '@/lib/client';



export default async function page({ params }) {


  const query = `*[_type == "product" && Quantity > 0] | order(_createdAt desc) {
    image,
    name,
    slug,
    discont,
    price,
    _id,
    Quantity,
    "category": category -> category
  }[0..50]`;

  
  let products = await client.fetch(query)
  console.log(products)
  // const headersList = await headers()
  // const limit = headersList.get('limit')
  // const page = headersList.get('page')

  const queryTypes = `*[_type == "bathType"] | order(_createdAt desc) {
    _id,
    name,
    description
  }[0..50]`;
  
  let bathTypes = await client.fetch(queryTypes);
  





  return (
 
      <div className="md:mx">
        <div className="flex    ">
          <div className="w-full md:ps-4  rounded-md flex items-center justify-center bg-gray-100">
            <div className='flex flex-col w-full px-auto'>
              
              {/* Product List */}
              <ProductsList FirstProducts={products} />
            </div>
          </div>
        </div>
      </div> 


  )
}

