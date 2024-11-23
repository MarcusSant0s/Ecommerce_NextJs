'use client'
import { useEffect, useState } from 'react';
import { Product } from '@/components';

const ProductsList = ({ FirstProducts }) => {
  const [products, setProducts] = useState([...FirstProducts]);
  const [start, setStart] = useState(50);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  const loadMoreProducts = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`/api/products?start=${start}&limit=${limit}`);
      const newProducts = await response.json();
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setStart(start + limit); // Update the start index for the next batch
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={{ width: 'calc(100vw - 3vw)' }} className="grid max-[380px]:grid-cols-1 rows--height grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:p-2 md:gap-2 mx-auto border rounded-md border-dashed w-full h-max pt-2 gap-y-4">
      
      {products.length > 0 ? (
        products.map((productsData) => (
          <Product key={productsData._id} product={productsData} />
        ))
      ) : (
        <p>No products found for this page.</p>
      )}

      <button 
        className="col-span-full flex justify-center" 
        onClick={loadMoreProducts} 
        disabled={loading}
      >
        <div className="border bg-pink-600 text-white rounded-sm font-bold py-4 px-6 flex items-center">
          {loading ? "Carregando..." : "Ver mais"}
        </div>
      </button>
    </div>
  );
}

export default ProductsList;
