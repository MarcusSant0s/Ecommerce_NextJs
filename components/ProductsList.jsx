'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/components';
import Filters from '@/components/FilterProducts'; // Componente de filtros

const ProductsList = ({ FirstProducts }) => {
  const [products, setProducts] = useState([...FirstProducts]);
  const [start, setStart] = useState(50);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    subCategory: '',
    minPrice: 0,
    maxPrice: Infinity,
    bathType:'',

  });
  const limit = 20;

  const fetchProducts = async (reset = false) => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        start: reset ? '0' : start.toString(),
        limit: limit.toString(),
        ...(filters.category != '' && { category: filters.category }), // Evita categoria vazia
        ...(filters.minPrice > 0 && { minPrice: filters.minPrice.toString() }), // Evita minPrice 0
        ...(filters.maxPrice == Infinity ? null : filters.maxPrice.toString()), // Evita maxPrice Infinity
        ...(filters.bathType != '' && { bathType: filters.bathType }), // Evita bathType vazio
        ...(filters.subCategory.length > 0 && { subCategory: filters.subCategory.join(',') }), // Evita subcategorias vazias
      });
  
      const response = await fetch(`/api/products?${query.toString()}`);
      console.log(`api/products?${query.toString()}`)
      const newProducts = await response.json();
  
      setProducts(reset ? newProducts : [...products, ...newProducts]);
      setStart(reset ? limit : start + limit);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    fetchProducts(true); // Reseta a lista de produtos ao aplicar filtros
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Filters onChange={handleFilterChange} />
      <div
        style={{ width: 'calc(100vw - 3vw)' }}
        className="grid max-[380px]:grid-cols-1 rows--height grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:p-2 md:gap-2 mx-auto border rounded-md border-dashed w-full h-max pt-2 gap-y-4"
      >
        {products.length > 0 ? (
          products.map((productsData) => (
            <Product key={productsData._id} product={productsData} />
          ))
        ) : (
          <p>Nenhum produto encontrado para esta página.</p>
        )}

        {products.length > 0 && (
          <button
            className={`col-span-full flex justify-center ${loading ? 'opacity-50' : ''}`}
            onClick={() => fetchProducts()}
            disabled={loading}
          >
            <div className="border bg-pink-600 text-white rounded-sm font-bold py-4 px-6 flex items-center">
              {loading ? 'Carregando...' : 'Ver mais'}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsList;

