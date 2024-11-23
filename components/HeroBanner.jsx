import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
 


import bannerImage2 from '../public/bannerTwo.jpg';
import test1 from '../public/bannerTwo-removebg.png';
 
const HeroBanner = () => {
  return (

   <header className='w-screen   h-screen  relative   '>

 
  <div className=" absolute top-0 left-0  overflow-y-hidden  backdrop-blur-md h-full md:w-screen    bg-gradient-to-b from-pink-400/60 via-red-300/40 to-white ">
    <Image
      src={bannerImage2}
      alt="banner-img"
      priority
      className='relative   h-full object-cover md:hidden'
    />

<Image
      src={test1}
      alt="banner-img"
      priority
      className='max-md:hidden object-cover z-30 max-w-3xl '
    />
  </div>
            

 




      <div className=" w-10/12  absolute md:relative top-1/2 max-md:left-1/2 md:left-2/4 md:w-max md:px-2 md:max-w-md max-md:transform max-md:-translate-x-1/2    ">
        <p className='md:-mt-20 w-full py-5 text-white  font-bold  mx-auto flex flex-col text-center text-balance backdrop-blur-3xl    border bg-gray-600/10 border-white md:rounded-m md:text-pink-700 md:border-pink-700'>
          <span className='text-5xl font-sans'>Mulheres que Brilham</span>  
         <span className='text-3xl ml-2 mb-3 md:mb-0'> Sonhos que se realizam</span>

 

        </p>

        <Link href='/products' className="max-md:mt-10 md:mx-auto relative inline-block text-white md:text-pink-400 text-center  md:w-max font-semibold py-2 px-4 rounded-lg border border-white md:border-pink-400 overflow-hidden group">
              <span className="absolute inset-0 bg-pink-400  md:bg-white transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 md:text-xl font-bold ">Confira nossas peças</span>
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
