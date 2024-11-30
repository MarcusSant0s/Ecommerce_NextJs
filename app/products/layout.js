import React from 'react' 
import { Footer, Navbar } from '@/components'

const layout = ({children}) => {
  return (
    <div>
      <Navbar />

 
      {children}


      <Footer/>
    </div>
  )
}

export default layout
