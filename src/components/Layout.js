import SEO from '@components/SEO';
//import Navigation from '@components/Navigation';
//import Footer from '@components/Footer';
import Navigation from '@components/navigation';

import styles from '../styles/Components/Layout.module.css';

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