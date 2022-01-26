import Layout from '@components/Layout';
import styles from './index.module.css';
import MainHeader from '@components/Main-header';
import Decouverte from '@components/Decouverte';
import { getStaticProps } from './first';
import TitleSection from '@components/TitleSection';

const HomePage = () => {

  const pageMeta = {
    title: 'Alexandre Charlier développeur web, react angular next redux',
    description: 'Découvrez mon site pour la présentation de mon blog et de mon profil',
    /*  image:
       'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', 
       url: `${SITE_DOMAIN}/about`,*/
  };

  const dataMainHeader = {
    page: 'home',
    img: '/images/arch_1900x1200.jpg',
    title: "Réaliser un site internet",
    subtitle: "En quelques minutes ou un peu plus..."
  }

  const dataCards = [
    {
      title: 'Bien Commencer',
      button: 'Entrée',
      img: './images/cards/duji-1-1667x2500.jfif',
      page: '/commencer'
    },
    {
      title: 'Tour du monde',
      button: 'En route',
      img: './images/cards/globe.jpg',
      page: '/templates'
    },
    {
      title: 'Réaliser',
      button: 'Visiter',
      img: './images/cards/theatre.jpg',
      page: '/realiser'
    }
  ]

  return (

    <Layout pageMeta={pageMeta}>
      <div className={styles["main-container"]}>
        <MainHeader dataHeader={dataMainHeader} />
        <div className={styles["container-first-parts"]}>
          <div className={styles["content-first-parts"]} id="decouvrir">
            <TitleSection title="Découvrir" />
            <div className={styles["first-parts__main"]}>
              {dataCards.map((card, i) => <Decouverte key={i} dataCards={card} />)}
            </div>
          </div>
        </div>

        <div className={styles["container-second-parts"]}>
          <div className={styles["content-second-parts"]}>
            <span className={styles["second-parts__title"]}>"Les détails ne sont pas des détails, ils font la conception d'un
              produit"</span>
            <span className={styles["second-parts__author"]}>Bill Bernbach</span>
          </div>
        </div>
        <div className={styles["container-third-parts"]}>
          <p className={styles["third-parts__title"]}>Une question, un avis ? N'hesitez-pas !</p>
          <button className={styles["third-parts__button"]}>Cliquez</button>
        </div>
      </div>
    </Layout>

  );
}



export default HomePage


/* <div class="main-center__center">
          <div class="container-cards">
            <div class="cards-header">
              <img class="cards-img" src='./dist/pictures/dujiangyan/duji-1-1667x2500.jfif' alt="">
            </div>
            <div class="cards-bottom">
              <p>Bien commencer</p>
              <a class="link-pos link-cards" href="commencer.html">Entrée</a>
            </div>
          </div>
          <div class="container-cards">
            <div class="cards-header">
              <img class="cards-img" src='./dist/pictures/globe.jpg' alt="">
              <!--  <div class ="divcanvas">
              <canvas id="canvas" width="300" height="150"></canvas>
              </div> -->
            </div>
            <div class="cards-bottom">
              <p>Tour du monde</p>
              <a class="link-pos link-cards" href="tour-du-monde.html">Visiter</a>
            </div>
          </div>
          <div class="container-cards">
            <div class="cards-header">
              <img class="cards-img" src='./dist/pictures/stage.jpg' alt="">
            </div>
            <div class="cards-bottom">
              <p>Réaliser</p>
              <a class="link-pos link-cards" href="commencer.html">Entrée</a>
            </div>
          </div>
        </div>*/