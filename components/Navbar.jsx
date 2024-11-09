'use client'


import { Cart } from './';
import { FaShoppingCart } from "react-icons/fa";
import Icon from './Icon';

import Link from 'next/link';
import { useStateContext } from '@/context/StageContext';
import React, { useState } from 'react'


import { playfair_display } from '@/app/font';

const Navbar = () => {


  const [isNavBarMenuActive, setIsNavBarMenuActive] = useState(false);

  const onHandlerNavbarMenuActivation = () => {
    setIsNavBarMenuActive(!isNavBarMenuActive);
  }





  const { showCart, setShowCart, totalQuantities } = useStateContext();




  return (
    <nav className='bg-transparent h-max w-screen  fixed left-0 top-0 z-30 flex flex-col md:bg-white' >

      <div className='flex justify-between'>
        <Link href="/" className='flex h-max items-center justify-center gap-2'>
          <Icon className="ml-1 mt-1 h-12 w-12   rounded-xl" />
          <h1 className={playfair_display.className}><span className='max-md:hidden text-3xl uppercase font-extrabold tracking-wide text-nowrap text-black/70   '
            style={{ textShadow: '2px 2px 0px lightpink' }}>Brenda Nunes</span></h1>
        </Link>



        <div className=' flex items-center justify-between md:justify-end   h-12 w-14 gap-2   mr-7'>

          <button onClick={() => setShowCart(!showCart)} type='button'
            className=' text-2xl rounded-2xl bg-white p-2  flex justify-center text-pink-600 hover:text-white hover:bg-pink-600 transition-colors ease-in delay-100 
             border-0 '>
            <div className="relative">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 text-base bg-white text-black rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantities}
              </span>
            </div>
          </button>

          <button onClick={onHandlerNavbarMenuActivation} className="text-2xl rounded-md bg-white py-1 md:hidden ">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
              <path d="M3.75 12H20.25" stroke="#db2777 " strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3.75 6H20.25" stroke="#db2777 " strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3.75 18H20.25" stroke="#db2777" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>



      </div>

      {/** Category List */}
      <div className={`${isNavBarMenuActive ? `max-sm:absolute` : ` hidden`} w-screen h-screen absolute bg-gray-400/45 md:inline-block md:h-max md:mt-10`} onClick={onHandlerNavbarMenuActivation}>
        <div className=' z-40 w-4/5 h-screen bg-white text-pink-700 flex flex-col  font-light   p-4 md:h-max md:w-full md:p-0 '>

          <h2 className='text-xl border-b   border-b-red-400 w-max md:hidden'>Explore</h2>

          <div className='mt-8 h-96 text-pink-700 flex flex-col font-semibold text-2xl divide-y space-y-5  md:flex-row md:divide-y-0 md:space-y-0 md:h-max md:mt-0 md:mx-auto md:text-xl  '>
            
              <Link className='  mt-4  px-2 py-1  md:mt-1 ' href={'#'}>
                
              </Link>

              <Link className='  mt-4  px-2 py-1  md:mt-1 ' href={'#'}>
                Colares
              </Link>

              <Link className='  mt-4  px-2 py-1  md:mt-1 ' href={'#'}>
                Brincos
              </Link>

              <Link className=' mt-4  px-2 py-1   md:mt-1 ' href={'#'}>
                Anéis
              </Link>
         
              <Link className=' mt-4  px-2 py-1  md:mt-1  ' href={'#'}>
                Pulseiras
              </Link>

          </div>

        </div>

      </div>


      {showCart && 
      
      <div className='absolute top-0  z-50 w-svw h-screen bg-gray-400/45' onClick={() => setShowCart(!showCart)}>
        <Cart />

      </div>
      }


    </nav>




  )
}

export default Navbar
