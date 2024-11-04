'use client'
import { useEffect, useState} from 'react'; 
 import { Product } from '@/components' 
 
  
const ProductsList = ({products}) => {

  
//   const [newProducts, setNewProducts] = useState([])
//   const [isFetchingNewProducts, setIsFetchingNewProducts] = useState(false)
//   const [quantityProducts, setQuantityProducts] = useState(30)

//   useEffect(() => {
//     console.log('true');
     
         
//     async function fetchNewProducts() {
//       let res = await client.fetch(query)
//       setNewProducts([...newProducts, res]);
//       console.log(newProducts)
//     }

//     fetchNewProducts()

// }, [isFetchingNewProducts]);



//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
    
//     // Only set default values if they are not present
//     let updated = false;
 
//     if (!params.has('categoryParam')) {
//       params.set('categoryParam', '');
//       updated = true;
//     }

//     // Update the URL only if new parameters were added
//     if (updated) {
//       router.replace(`?${params.toString()}`, undefined, { shallow: true });
//     }

//     // Sync state with query params
//  }, [router]);


//  function handleIsFetchingNewProducts(){ 
//   setIsFetchingNewProducts(!isFetchingNewProducts)

//  }


  return (
       <div style={{ width: 'calc(100vw - 3vw)' }} className="grid max-[380px]:grid-cols-1 rows--height grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:p-2 md:gap-2    border rounded-md border-dashed w-full h-max pt-2 gap-y-4">


     {products.length > 0 ? (
              products.map((productsData) => (
                <Product key={productsData._id} product={productsData} />
           ))
         ) : (
        <p>No products found for this page.</p>
      )}

 


        {/* onClick={handleIsFetchingNewProducts}  */}
        <button className="col-span-full flex justify-center ">
          <div className="border border-red-500 bg-red-400 text-white   rounded-sm font-bold py-4 px-6  flex items-center">
          Next page
          </div>
        </button>
    </div>
  )
}

export default ProductsList
