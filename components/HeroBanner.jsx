import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {SquareFading} from './';
 


import bannerImage2 from '../public/bannerTwo.jpg';


const HeroBanner = () => {
  return (

   <header className='w-screen max-w-7xl h-screen  relative md:grid md:grid-cols-2 md:mt-16 '>

 
  <div className="max-sm:h-full md:relative md:inline-block md:my-auto">
    <span className=" max-sm:hidden md:absolute top-0 right-0 md:right-2 md:top-2 w-full h-full bg-red-400 z-0"></span>
    <Image
      src={bannerImage2}
      alt="banner-img"
      priority
      className='relative md:z-10 h-full object-cover md:h-4/5'
    />
  </div>
            

 



      <div className=" w-10/12  absolute md:relative max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2   flex flex-col   md:mx-auto justify-around md:justify-center md:h-full   ">
        <p className='md:-mt-20 w-full py-5 text-white  font-bold  mx-auto flex flex-col text-center text-balance backdrop-blur-sm animated-background bg-gradient-to-br delay-300  from-pink-600 via-pink-400 to-pink-200 border-4 border-white md:rounded-md '>
          <span className='text-5xl font-sans'>Mulheres que Brilham</span>  
         <span className='text-3xl ml-2 mb-3 md:mb-0'> Sonhos que se realizam</span>

 

        </p>

        <Link href='/products' className="max-md:mt-10 md:mx-auto relative inline-block text-white md:text-pink-400   md:w-max font-semibold py-2 px-4 rounded-lg border border-white md:border-pink-400 overflow-hidden group">
              <span className="absolute inset-0 bg-pink-400  md:bg-white transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 ">Confira nossas peças</span>
        </Link>


 
      </div>




{ // 
    //   {/* Hero top */} 
    //   <div className=" lg:mx-auto bg-pink-200 animated-background bg-gradient-to-br from-pink-200 to-red-500 h-full rounded-b-2xl sm:flex sm:items-center pt-40 max-sm: "> <Navbar /> {/* Container */}
    //     <div className="mx-auto center max-w-7xl sm:px-5 py-16  md:gap-x-4   md:py-0 md:flex bg-white/10 text-white backdrop-blur-md rounded-2xl p-2 ">
    //       <Image
    //         src={bannerImage2}
    //         alt="banner-img"
    //         priority
    //         className='h-full max-h-96 w-full max-w-96  object-cover mx-auto px-1 pt-1 rounded-3xl md:relative' />
    //       {/* Title */}
    //       <div className='md:flex md:flex-col my-auto max-w-md p-2 md:p-0 mx-auto max-sm:max-w-96 '>
    //         <h1 className=" mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12 "> Mulheres que Brilham <p className='text-2xl'> Sonhos que se realizam</p> </h1>
    //         {/* Buttons */} <div className="flex items-stretch ">
    //           <a href="#" className="mr-6 rounded-md bg-black px-8 py-4 text-center font-semibold text-white lg:mr-8"> Confira</a>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
}



    </header>

  )
}

export default HeroBanner
