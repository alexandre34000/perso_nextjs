import Link from 'next/link';
import Head from 'next/head';
import Layout from '@components/Layout';

function HomePage(props) {

    const pageMeta = {
        title: 'Jamstack Explorers — Free Jamstack Courses',
        description:'Take free Jamstack courses and complete missions about React, Vue, Angular, Next.js and more! See your progress and earn rewards as you go. Get started today!',
       /*  image:
          'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', */
      };


    return (
      
     <Layout navtheme="light" pageMeta={pageMeta}>
     
           <div>Welcome to Next.js!</div>
           <Link href="/posts/first"><a>First Post</a></Link>
          
           <Link href="/posts/second"><a>second Post</a></Link>
           <br/>
           </Layout>
     

     )
 }

 
 
 export default HomePage