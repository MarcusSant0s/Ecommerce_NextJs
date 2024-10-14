
import { ProductDetailsComponent } from '@/components';
  import { client } from '@/lib/client';
 
  // import { Product } from '@/components';
  
 
 

const ProductDetails = async ({params}) =>  {

  const query = `*[_type == "product" && slug.current == '${params.slug}'][0]`;  
  
 
    let product = await client.fetch(query); 
    console.log('\n \n products: ' + product + '\n \n')

  return  (
  <ProductDetailsComponent product={product} />
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


 