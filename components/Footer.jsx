import React from 'react'
import { IoLogoWhatsapp, IoLogoInstagram,IoLogoFacebook  } from "react-icons/io";
import Icon from './Icon';
import Link from 'next/link';
 

const Footer = () => {
  return (


<footer className="block"> {/* Container */} <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10"> {/* Component */} <div className="flex-col flex items-center">
      <a href="#" className="mb-8  max-w-full flex items-center ">
        <Icon className=" mx-auto max-h-20 " />  
      </a>
      <div className="text-center font-semibold">
        <Link href="/" className="inline-block px-6 py-2 font-normal text-black transition hover:text-pink-600"> Sobre </Link> 
        <a href="https://www.google.com/maps/place/R.+Sete+de+Setembro,+127+-+01+-+Centro,+Ca%C3%A7apava+-+SP,+12281-620/data=!4m2!3m1!1s0x94cc51708a515071:0x39aa5670174c3422?sa=X&ved=1t:242&hl=en&ictx=111" className="inline-block px-6 py-2 font-normal text-black transition hover:text-pink-600"> Endereços </a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-pink-600"> Garantia </a>
      </div>
      <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
      <div className="mb-12 grid-cols-3 grid-flow-col grid w-full max-w-52 gap-3">
        <a href="wa.me/message/WRRZNW4WUYWVJ1" className="mx-auto flex-col flex max-w-10 items-center justify-center text-black">
        <IoLogoWhatsapp className='text-3xl hover:text-green-400 ' />
        </a>
        <a href="https://www.instagram.com/brendanunessemijoias_/" className="mx-auto flex-col flex max-w-10 items-center justify-center text-black">
        <IoLogoInstagram className='text-3xl hover:text-pink-500 '/>  
        </a>
        <a href="https://www.facebook.com/brendanunessemijoias/" className="mx-auto flex-col flex max-w-10 items-center justify-center text-black">
        <IoLogoFacebook className='text-3xl hover:text-blue-800 '/>  
        </a>

 
      </div>
      <p className="text-sm sm:text-base"> © Copyright 2024. All rights reserved. </p>
    </div>
  </div>
</footer>


  )
}

export default Footer
