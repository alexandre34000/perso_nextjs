import Layout from '../components/Layout';
import styles from './commencer.module.css';
import MainHeader from '../components/Main-header';
import Maintenance from '../components/Maintenance';
import TitleSection from '../components/TitleSection';

const  Commencer =() =>{
    const pageMeta = {
        title: 'Alexandre Charlier développeur web, react angular next redux',
        description:'Découvrez mon site pour la présentation de mon blog et de mon profil',
       /*  image:
          'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', 
          url: `${SITE_DOMAIN}/about`,*/
        };
        const dataMainHeader = {
          page: 'commencer',
          img: '/images/Page-decouverte/librairie_1900x1200.jpg',
          title: "Bien débuter",
          subtitle: "Tout ce qu'il faut savoir"
        }

    return (
      
      <Layout  pageMeta={pageMeta}>
<div className={styles["main-container"]}>
        <MainHeader dataHeader={dataMainHeader} />
        <TitleSection title="Commencer" />
        <Maintenance />
        </div>
     </Layout>

     );
}

export default Commencer