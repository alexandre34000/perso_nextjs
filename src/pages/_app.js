import '../styles/globals.css';
import { AppWrapper } from '@context/scrollState.js';

export default function App({ Component, pageProps }) {

   return (
      <AppWrapper>
         <Component {...pageProps} />
      </AppWrapper>
   )
}