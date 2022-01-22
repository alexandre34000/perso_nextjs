import '../styles/globals.css';
import Layout from '@components/Layout';
import '@styles/globals.css'

export default function App({ Component, pageProps }) {

   return( 
      //Start Place for Provider context
      <Component {...pageProps} />
    // End Place for Provider context
   )
}