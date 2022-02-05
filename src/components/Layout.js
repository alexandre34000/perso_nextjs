import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import styles from './Layout.module.css';
import ScrollUp from './ScrollUp';

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