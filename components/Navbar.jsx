'use client'


 import {Cart} from './';
import { FaShoppingCart } from "react-icons/fa";
import Icon from './Icon';
import Link from 'next/link';
import { useStateContext } from '@/context/StageContext';
import React, {useState} from 'react'


import { playfair_display }  from '@/app/font';

const Navbar = () => {
  
  const [navBarMenuActive, setNavBarMenuActive] = useState(true);

  const onHandlerNavbarMenuActivation = () => {
    setNavBarMenuActive(!navBarMenuActive);
  }

  const [navBarMobileActive, setNavBarMobileActive] = useState(false);

  const onHandlerNavbarMobileActivation = () => {
    setNavBarMobileActive(!navBarMobileActive);
  }

  const { showCart, setShowCart, totalQuantities } = useStateContext();


  
  
  return (

  <nav className={`${(navBarMobileActive) 
    ?`bg-transparent` 
    : `bg-white/90 backdrop-blur`}
   h-auto w-screen  fixed left-0 top-0 z-30`}>
    
    <div className="flex  justify-between py-2 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4  ">
      
      <Link href="/">
        <Icon className="ml-1 mt-1 h-12 w-12   rounded-xl" />
      </Link>
      <div className={`${(navBarMobileActive) 
      ?`hidden` 
      : `flex`
      } pl-2  mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex-row lg:space-x-1 lg:space-y-0  `}>
        <div className={`relative flex flex-col `}>
          <a onClick={onHandlerNavbarMenuActivation} href="#" className='flex flex-row rounded-lg lg:px-6 lg:py-4 
           lg:hover:text-gray-800 text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50 text-xl font-extrabold uppercase' > Categorias <svg className="fill-current transition rotate-180 w-6 h-6" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
            </a> {/* Dropdown - remove "hidden" to show*/} <div  className={`${(navBarMenuActive)? `hidden`:null} z-50 flex w-full flex-col rounded-lg px-2 py-1 lg:absolute lg:top-20 lg:w-[800px] lg:py-0 bg-gray-100 lg:flex-row lg:flex-wrap   xl:w-[950px]}`}   > 
                 {/* ITEM */} <a className="flex grow flex-col rounded-lg px-3 py-1  lg:basis-20 xl:px-8" href="#"> {/* TEXT */} <h2 className=" mb-1 mt-5 text-lg font-bold text-black"> Pulseiras </h2>
            </a> {/* ITEM */} <a className="flex grow flex-col rounded-lg px-3 py-1   lg:basis-20  xl:px-8" href="#">  <h2 className=" mb-1 mt-5 text-lg font-bold text-black"> Colares </h2>
            </a> {/* ITEM */} <a className="flex grow flex-col rounded-lg  px-3 py-1   lg:basis-20  xl:px-8" href="#"> {/* TEXT */} <h2 className=" mb-1 mt-5 text-lg font-bold text-black">  Brincos</h2>
            </a>{/* ITEM */} <a className="flex grow flex-col rounded-lg  px-3 py-1  lg:basis-20  xl:px-8" href="#"> {/* TEXT */} <h2 className=" mb-1 mt-5 text-lg font-bold text-black"> Anéis </h2>
            </a>
          </div>
        </div>
        <Link legacyBehavior
        href="/products">
        <a  className=" rounded-lg lg:px-6 lg:py-4 font-extrabold lg:bg-white lg:bg-opacity-50 lg:hover:text-gray-800 text-xl uppercase"> <h1 className={playfair_display.className}> Peças </h1></a>
        </Link>
        
        <a href="#" className="text-xl lg:rounded-lg pb-8 lg:px-6 lg:py-4  font-extrabold  lg:hover:text-gray-800 lg:bg-white lg:bg-opacity-50 uppercase"> Garantia </a>
      </div>
      <div className={`max-lg:hidden flex-col space-y-4 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0`}>
        <button onClick={() => setShowCart(!showCart)} type='button'
         className='text-3xl rounded-lg bg-white px-8 py-4  flex justify-center text-pink-400 hover:text-white hover:bg-pink-400 transition-colors ease-in delay-300  border border-red-400'>  
        <div className="relative">
    <FaShoppingCart />
    <span className="absolute -top-2 -right-2 text-base bg-red-200 text-white rounded-full w-5 h-5 flex items-center justify-center">
      {totalQuantities}
    </span>
  </div>
     </button>
        {/* <Link className="font-inter rounded-lg bg-pink-400 px-8 py-4 text-center text-white  lg:text-xl "  href="#"> Login </Link> */}
      </div>

      <div className=' flex items-center justify-between  lg:hidden h-12 w-14 gap-2   mr-7'>

      <button onClick={() => setShowCart(!showCart)} type='button'
            className=' text-2xl rounded-2xl bg-white p-2  flex justify-center text-pink-400 hover:text-white hover:bg-pink-400 transition-colors ease-in delay-100  border-0 '>  
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-base bg-white text-black rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantities}
            </span>
          </div>
     </button>

      <button   onClick={onHandlerNavbarMobileActivation} className="text-2xl rounded-md bg-white py-1 ">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
          <path d="M3.75 12H20.25" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.75 6H20.25" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.75 18H20.25" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      </div>
    </div>
    


    {showCart && <Cart />}


  </nav>
  


              
  )
}

export default Navbar
