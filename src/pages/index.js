import Layout from '@components/Layout';
import styles from './index.module.css';
import MainHeader from '@components/Main-header';
import Decouverte from '@components/Decouverte';

const HomePage = () => {

  const pageMeta = {
    title: 'Alexandre Charlier développeur web, react angular next redux',
    description: 'Découvrez mon site pour la présentation de mon blog et de mon profil',
    /*  image:
       'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800', 
       url: `${SITE_DOMAIN}/about`,*/
  };

  return (
   
    <Layout pageMeta={pageMeta}>
      <div className={styles["main-container"]}>
      <MainHeader page="home" img='/images/arch_1900x1200.jpg'/>
      <Decouverte />
        {/* <div class="main-center" id="decouvrir">
          <div class="main-center__header">
            <div class="main-center__header-border"></div>
            <h2 class="main-center__header-title">Découvrir</h2>
            <div class=" main-center__header-border"></div>
          </div>
        </div>

        <div class="main-center__center">
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
        </div>
        <div class="main-bottom">
          <div class="main-bottom-content">
            <span class="main-bottom__title">"Les détails ne sont pas des détails, ils font la conception d'un
              produit"</span>
            <span class="main-bottom__author">Bill Bernbach</span>
          </div>
        </div>
        <div class="main-bottom-bottom" id="main-bottom-faq">
          <p class="main-bottom-bottom__title">Une question, un avis ? N'hesitez-pas !</p>
          <Button class="main-bottom-bottom__button">Cliquez</Button>

        </div> */}
      </div>



    </Layout>

  );
}



export default HomePage