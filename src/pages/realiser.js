import Layout from '../components/Layout';
import MainHeader from '../components/Main-header';
import styles from './realiser.module.css'
import Maintenance from '../components/Maintenance';
import TitleSection from '../components/TitleSection';

const Realiser = () => {
  const pageMeta = {
    title: 'Alexandre Charlier développeur web, react angular next redux',
    description: 'Découvrez mon site pour la présentation de mon blog et de mon profil',
    /*  image:
       'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', 
       url: `${SITE_DOMAIN}/about`,*/
  };
  const dataMainHeader = {
    page: 'Réaliser',
    img: '/images/Page-realiser/music-1900x1200.jpg',
    title: "Entreprendre",
    subtitle: "je suis la et oh"
  }

  return (

    <Layout pageMeta={pageMeta}>
      <div className={styles["main-container"]}>
        <MainHeader dataHeader={dataMainHeader} />
        <TitleSection title="Realiser" />
        <Maintenance />
      </div>
    </Layout>

  );
}

export default Realiser