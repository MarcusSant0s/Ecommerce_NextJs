'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
import { GiNecklace } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";

const FilterProducts = ({ types }) => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(true);

  const onHandlerShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className=" mt-32 md:mt-24 lg:mt-20 p-4  bg-white shadow-md rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center py-4 border-b border-gray-200">
        <button onClick={onHandlerShowFilter} className="flex items-center text-xl font-semibold text-gray-700 cursor-pointer gap-2 hover:text-pink-700">
          <span>Filtros</span>
          <FaChevronDown className={`transition-transform duration-500 ${showFilter ? 'rotate-180' : ''}`} />
        </button>

        <button className="text-sm text-gray-500 hover:text-pink-700">Limpar filtros</button>
      </div>

      {/* Filters */}
      <div className={`${showFilter ? 'hidden' : ''} pr-2`}>
        {/* Search Filter */}
        <div className="flex w-full mb-6 md:mb-10 md:px-6 px-2 items-center border bg-gray-50 border-gray-300 rounded-md ">
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            className="py-2 w-full text-sm md:text-base rounded-md  placeholder:text-gray-400 " 
          />
        </div>

        {/* Categories Filter */}
        <div className="pb-3 md:pb-6 border-b border-gray-100 mb-6">
          <p className="font-bold text-gray-700 mb-4">Categoria</p>
          <div className="flex flex-wrap gap-2">
            <Link href={{ query: { categoryParam: 'Pulseira' } }} className="p-2 text-sm md:text-base font-semibold text-gray-700 rounded-md bg-white border border-gray-300 hover:bg-pink-700 hover:text-white">
              Pulseiras
            </Link>
            <Link href={{ query: { categoryParam: 'Brinco' } }} className="p-2 text-sm md:text-base font-semibold text-gray-700 rounded-md bg-white border border-gray-300 hover:bg-pink-700 hover:text-white">
              Brincos
            </Link>
            <Link href={{ query: { categoryParam: 'Anel' } }} className="p-2 text-sm md:text-base font-semibold text-gray-700 rounded-md bg-white border border-gray-300 hover:bg-pink-700 hover:text-white">
              Anéis
            </Link>
          </div>
        </div>

        {/* Filter by Bath Type */}
        <div className="pb-3 md:pb-6 border-b border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-gray-700">Tipo de Banho</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <label className="flex flex-col sm:flex-row items-center">
              <span className="text-sm md:text-base text-gray-700 mb-2 sm:mb-0 sm:mr-2">Selecione o tipo de banho:</span>
              <select className="form-select w-full sm:w-auto border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-700">
                <option value="">Todos</option>
                {types.map((bathType) => (
                  <option key={bathType._id} value={bathType._id}>
                    {bathType.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
