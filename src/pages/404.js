import Header404 from '@components/Header404';
import { SITE_DOMAIN } from '@util/constants';
import Layout from '@components/Layout';

const page404 = () => {
  const pageMeta = {
    title: "Oops! cette page n'existe pas",
    description: "Oops! on accede à cette page si l'on est perdu!",
    url: `${SITE_DOMAIN}/404`,
  };

  return (
    <Layout navtheme="dark" pageMeta={pageMeta}>
      <Header404 />
    </Layout>
  );
};

export default page404;