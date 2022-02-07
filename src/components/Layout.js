import SEO from './SEO.js';
import Navigation from './navigation.js';
import styles from './Layout.module.css';
import ScrollUp from './ScrollUp.js';

export default function Layout({ children, pageMeta }) {

  return (
    <div className={styles.container}>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        url={pageMeta.url}
        image={pageMeta.image}
        creator={pageMeta.creator}
      />
      <Navigation />
      <main>{children}</main>
      <ScrollUp />
     {/*  <Footer className={styles.footer} /> */}
    </div>
  );
}