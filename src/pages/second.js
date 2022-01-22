import Link from 'next/link';
import Head from 'next/head';

function SecondPage(props) {
    return (
        <>
         <Head>
         <title>My page Second</title>
      </Head>
           <div>Welcome to Second.js!</div>
           <Link href="/">
               <a>Home</a>
            </Link>
           
           <br/>
           <div>Next stars: {props.stars}</div>
        </>	    
     )
 }

 export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
       props: { stars: json.stargazers_count }
    }
 }
 
 export default SecondPage