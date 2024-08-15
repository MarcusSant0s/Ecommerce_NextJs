import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
 
const Layout = ({children}) => {
  
  return (
    <div className='layout'>
            <Head>
            <title> BN Semijoias </title>
            <meta name="description" content="Empreendimento de Joias" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <Footer>

      </Footer>
      
    </div>
  )
}

export default Layout