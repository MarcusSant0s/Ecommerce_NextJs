import React from 'react'
import Navbar from './Navbar'

const HeroBanner = () => {
  return (
              
<header> 

<Navbar/>
{/* Hero top */} <div className="bg-gray-300"> {/* Container */} <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"> {/* Title */} <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12"> The Website You Want Without The Dev Time. </h1> {/* Buttons */} <div className="flex items-stretch">
        <a href="#" className="mr-6 rounded-md bg-black px-8 py-4 text-center font-semibold text-white lg:mr-8"> Get Started </a>
        <a href="#" className="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg" alt="" className="mr-2 max-h-4 w-5" />
          <p>Download App</p>
        </a>
      </div>
    </div>
  </div> {/* Hero bottom */} <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"> {/* Component */} <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end"> {/* Arrow down */} <a href="#" className="absolute bottom-0 left-0">
        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946f0be6cfa0_Frame%2048040.svg" alt="" className="hidden lg:inline-block" />
      </a>
      <div className="max-w-xl lg:mr-[520px] lg:max-w-xs"> {/* Title */} <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3> {/* Divider */} <div className="my-6 w-16 border-t border-black"></div>
        <p className="text-sm text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. </p>
      </div> {/* Image */}
      <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px]" />
    </div>
  </div>
</header>

  )
}

export default HeroBanner
