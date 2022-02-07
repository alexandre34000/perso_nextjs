import Header404 from '../components/Header404';
import { SITE_DOMAIN } from '../util/constants';
import Layout from '../components/Layout';
import styles from './notFound.module.css';

const page404 = () => {
  const pageMeta = {
    title: "Oops! cette page n'existe pas",
    description: "Oops! on accede à cette page si l'on est perdu!",
    url: `${SITE_DOMAIN}/404`,
  };

  return (
    <Layout  pageMeta={pageMeta}>
    <div className={styles["main-container"]}>
      <Header404 />
      </div>
    </Layout>
  );
};

export default page404;