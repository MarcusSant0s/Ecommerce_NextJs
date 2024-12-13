'use client';

import { useState } from "react";

const Filters = ({ onChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const applyFilters = () => {
    onChange({
      category,
      minPrice: minPrice || '0',
      maxPrice: maxPrice || 'Infinity',
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-gray-100 p-4 rounded-lg shadow-md mt-16 justify-center ">
      {/* Filtro por Categoria */}
      <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
          Categoria
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-48 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Todas as Categorias</option>
          <option value="Brinco">Brinco</option>
          <option value="Colar">Colar</option>
          <option value="Pulseira">Pulseira</option>
          {/* Outras opções */}
        </select>
      </div>

      {/* Filtro por Preço Mínimo */}
      {/* <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="minPrice" className="text-sm font-medium text-gray-700 mb-1">
          Preço Mínimo
        </label>
        <input
          type="number"
          id="minPrice"
          placeholder="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full md:w-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div> */}

      {/* Filtro por Preço Máximo */}
      <div className="flex flex-col w-full md:w-auto">
        <label htmlFor="maxPrice" className="text-sm font-medium text-gray-700 mb-1">
          Valor Máximo
        </label>
        <input
          type="number"
          id="maxPrice"
          placeholder="∞"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full md:w-32 p-2 border rounded-md focus:ring-2  focus:outline-none"
        />
      </div>

      {/* Botão de Aplicar Filtros */}
      <button
        onClick={applyFilters}
        className="bg-logo-color  text-white text-bold px-4 py-2 rounded-md font-semibold hover:shadow-md focus:outline-none focus:ring-2  transition duration-200"
      >
        Aplicar Filtros
      </button>
    </div>
  );
};

export default Filters;
