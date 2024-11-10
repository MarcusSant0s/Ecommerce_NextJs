
import { ProductDetailsComponent } from '@/components';
  import { client } from '@/lib/client';

import PayWays from '@/components/PayWays'
 
   
  
 

const ProductDetails = async ({params}) =>  {

  const query = `*[_type == "product" && slug.current == '${params.slug}']{
      image, name, slug, discont, price, _id,
      "category": category -> category
  }[0]`;  
  
 
    let product = await client.fetch(query); 
    
 


  return  (<>
  <ProductDetailsComponent product={product}  />
  <PayWays />
  </>


  
  )


}

export default ProductDetails
 
 
export async function generateStaticParams() {

  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query); 

  
  return products.map((product) => ({
    slug: product.slug.current
  }))
}


 