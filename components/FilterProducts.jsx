'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importação correta
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";

const FilterProducts = ({ types }) => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(true);

  const onHandlerShowFilter = () => setShowFilter(!showFilter);

  const handleClearFilters = () => {
    // Limpar os filtros: redefinir os parâmetros de consulta
    router.push('/'); // Redireciona para a página inicial
  };

  // Exemplo de manipulação de query string
  const handleFilterCategory = (category) => {
    router.push({
      pathname: '/', // Caminho
      query: { categoryParam: category }, // Parâmetros de consulta
    });
  };

  return (
    <div className="mt-32 md:mt-24 lg:mt-20 p-4 bg-white shadow-md rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center py-4 border-b border-gray-200">
        <button
          onClick={onHandlerShowFilter}
          className="flex items-center text-xl font-semibold text-gray-700 cursor-pointer gap-2 hover:text-pink-700"
          aria-label="Alternar filtros"
        >
          <span>Filtros</span>
          <FaChevronDown className={`transition-transform duration-500 ${showFilter ? 'rotate-180' : ''}`} />
        </button>

        <button
          onClick={handleClearFilters}
          className="text-sm text-gray-500 hover:text-pink-700"
          aria-label="Limpar filtros"
        >
          Limpar filtros
        </button>
      </div>

      {/* Filters */}
      <div className={`${showFilter ? 'hidden' : ''} pr-2`}>
        {/* Search Filter */}
        <div className="flex w-full mb-6 md:mb-10 px-2 md:px-6 items-center border bg-gray-50 border-gray-300 rounded-md">
          <input
            type="text" 
            placeholder="Pesquisar..."
            className="py-2 w-full text-sm md:text-base rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-700"
          />
        </div>

        {/* Categories Filter */}
        <div className="pb-3 md:pb-6 border-b border-gray-100 mb-6">
          <p className="font-bold text-gray-700 mb-4">Categoria</p>
          <div className="flex flex-wrap gap-2">
            {['Pulseira', 'Brinco', 'Anel'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterCategory(category)}
                className="p-2 text-sm md:text-base font-semibold text-gray-700 rounded-md bg-white border border-gray-300 hover:bg-pink-700 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter by Bath Type */}
        <div className="pb-3 md:pb-6 border-b border-gray-100 mb-6">
          <p className="font-bold text-gray-700 mb-4">Tipo de Banho</p>
          <select
            className="form-select w-full sm:w-auto border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-700"
          >
            <option value="">Todos</option>
            {types.map((bathType) => (
              <option key={bathType._id} value={bathType._id}>
                {bathType.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
