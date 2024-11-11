'use client'
import {useState, useEffect}  from 'react';
import { useRouter } from 'next/navigation';
import Link  from 'next/link';

import  {BraceletSvg}  from "../components"
import { GiNecklace } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { LiaRingSolid } from "react-icons/lia";



const FilterProducts = () => {

  const router = useRouter();

 


    const [showFilter, setShowFilter ] = useState(true);
    const onHandlerShowFilter = () => {
      setShowFilter(!showFilter);
    }

      
  return (

    <div style={{ width: 'calc(100vw - 3vw)' }} className={`p-1  pb-1    lg:mt-10  `}> {/* Header */} <div className="mb-6 py-4 flex flex-row justify-between border-b border-gray-200">
          <button onClick={onHandlerShowFilter} className="flex items-center text-xl cursor-pointer gap-2" >
           <span className='text-xl font-medium'> Filtros </span>
          <FaChevronDown className={` transition-transform duration-500 ${
          (showFilter)
          ? `rotate-180`
          :``}`}/>
          </button> 

          <button className='mr-2'>Limpar filtros</button>
        </div> 
        
  
        <div className={`${
          (showFilter)
          ? `hidden`
          :``} pr-2`}> 
        {/* Search Filter */} <div className={ `flex w-full mb-6 md:mb-10 md:px-6 px-2 items-center border bg-white border-gray-400 rounded-md `}>
          <div className="mr-1 md:mr-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0005 14.0005L10.5359 10.5359M10.5359 10.5359C11.4736 9.59814 12.0004 8.32632 12.0004 7.00019C12.0004 5.67406 11.4736 4.40224 10.5359 3.46452C9.59814 2.5268 8.32632 2 7.00019 2C5.67406 2 4.40224 2.5268 3.46452 3.46452C2.5268 4.40224 2 5.67406 2 7.00019C2 8.32632 2.5268 9.59814 3.46452 10.5359C4.40224 11.4736 5.67406 12.0004 7.00019 12.0004C8.32632 12.0004 9.59814 11.4736 10.5359 10.5359Z" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input type="text" placeholder="Search" className="py-2 w-full text-sm md:text-base rounded-md focus:outline-none placeholder" />
        </div> {/* Categories Filter */} <div className="pb-3 md:pb-6 border-b border-gray-100 mb-3 md:mb-6">
          <p className="font-bold mb-6">Categoria</p>
          <div className="flex flex-wrap gap-2">
            {/* <Link  className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-white font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125V3.125ZM3.125 4.375H16.875V7.5H3.125V4.375ZM16.875 15.625H8.75V8.75H16.875V15.625Z" fill="black" />
              </svg> Cores
            </Link> */}

<div className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md">
      <input type="checkbox" className="hidden peer" id="Colar" />
      
      <label htmlFor="Colar" className="w-full h-full flex">
        <Link 
          href={'#'}
          className="w-full h-full"
        >
          <span className="w-full h-full flex items-center justify-center bg-white font-bold border border-black rounded-md peer-checked:bg-pink-700 peer-checked:text-white peer-checked:border-white">
            <GiNecklace className="text-xl mr-1" />
            Colares
          </span>
        </Link>
      </label>
    </div>

            <Link href={{ query: {categoryParam: 'Pulseira'}}}  className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-white font-bold active:bg-pink-700 border border-black active:text-white active:border-white">
              <BraceletSvg className='text-2xl'/>
               Pulseiras
            </Link>
         <Link href={{ query: {categoryParam: 'Brinco'}}}   className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-white font-bold active:bg-pink-700 border border-black active:text-white active:border-white">
              < GiCrystalEarrings className='text-2xl'/>
                Brincos
            </Link> 
            <Link href={{ query: {categoryParam: 'Pulseira'}}} className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-white font-bold active:bg-pink-700 border border-black active:text-white active:border-white">
            <LiaRingSolid  className='text-2xl'/>
            Anéis
            </Link>
          </div>
        </div> {/* Filter One */} <div className="pb-3 md:pb-6 border-b border-gray-100 mb-3 md:mb-6">
          <div className="flex justify-between items-center mb-6">
            <p className="font-bold">Filter One</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between ">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-50" />
              <span className="text-sm md:text-base">Ordem</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Letra</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Banho</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Tamanhos</span>
            </label>
 
          </div> 
        </div>
        </div>
      </div>
  )

}
export default FilterProducts

