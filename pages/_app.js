import "bootstrap/dist/css/bootstrap.min.css";
 
import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext'; 
import {Head} from 'next/document';


import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
   

            
    <StateContext>

  <Layout>
    <Toaster/>

   
    <Component {...pageProps} />
  </Layout>
  </StateContext>
 
  )
}
