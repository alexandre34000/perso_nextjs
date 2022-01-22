import SEO from '@components/SEO';

//import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

import styles from './Layout.module.css';

export default function Layout({ children, navtheme, pageMeta }) {
  return (
    <div className={styles.container}>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        url={pageMeta.url}
        image={pageMeta.image}
        creator={pageMeta.creator}
      />
      <header>
      <Navigation theme={navtheme} />
      </header>
      <main>{children}</main>
     {/*  <Footer className={styles.footer} /> */}
    </div>
  );
}