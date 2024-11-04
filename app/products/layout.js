import React from 'react'

import { Footer } from '@/components'

const layout = ({children}) => {
  return (
    <div>
      {children}


      <Footer/>
    </div>
  )
}

export default layout
