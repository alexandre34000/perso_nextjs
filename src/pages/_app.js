import '../styles/globals.css';
import Layout from '@components/Layout';
import '@styles/globals.css'
import { AppWrapper } from '@context/scrollState.js';
import { useEffect, useState } from 'react';



export default function App({ Component, pageProps }) {

   return( 
      //Start Place for Provider context
      <AppWrapper>
      <Component {...pageProps} />
      </AppWrapper>
    // End Place for Provider context
   )
}