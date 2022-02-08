import Layout from '../components/Layout';
import styles from './index.module.css';
import MainHeader from '../components/Main-header';
import Cards from '../components/Cards-home';
import { getStaticProps } from './first';
import TitleSection from '../components/TitleSection';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/scrollState';
import { dataCards } from '../i18n/dataCards';

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
    img: '/images/page-home/arch_1900x1200.jpg',
    title: "Réaliser un site internet",
    subtitle: "En quelques minutes ou un peu plus..."
  }

  const [data, setData] = useState([dataCards]);
  const headerHeight = 750;

  const { valueY } = useAppContext();
  const [posY, setPosY] = valueY;

  const reveal = (arg) => {
    let array = [...data]
    array[0][arg].reveal = "true";
    setData(array)
  }

  useEffect(() => {
    const posBottom = (window.screen.height + posY);
    if ((posBottom > headerHeight)) {
      if (posBottom > (headerHeight + 300) && (posBottom < (headerHeight + 650)) && data[0][0].reveal === "false") {
        reveal(0);
      }
      else if (posBottom > (headerHeight + 700) && (posBottom < (headerHeight + 1100)) && data[0][1].reveal === "false") {
        reveal(1)
      }
      else if ((posBottom > (headerHeight + 1100)) && (data[0][2].reveal === "false")) {
        reveal(2)
      }
    }
  }, [posY])


  return (

    <Layout pageMeta={pageMeta}>
      <div className={styles["main-container"]}>
        <MainHeader dataHeader={dataMainHeader} />
        <div className={styles["container-first-parts"]}>
          <div className={styles["content-first-parts"]} id="decouvrir">
            <TitleSection title="Découvrir" />
            <div className={styles["first-parts__main"]}>
              {dataCards.map((card, i) => <Cards key={i} dataCards={card} />)}
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