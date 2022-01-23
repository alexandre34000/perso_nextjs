import Layout from '@components/Layout';

const  Commencer =() =>{
    const pageMeta = {
        title: 'Alexandre Charlier développeur web, react angular next redux',
        description:'Découvrez mon site pour la présentation de mon blog et de mon profil',
       /*  image:
          'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', 
          url: `${SITE_DOMAIN}/about`,*/
        };


    return (
      
      <Layout  pageMeta={pageMeta}>
<div>page templtes</div>
          
     </Layout>

     );
}

export default Commencer