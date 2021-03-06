import Head from 'next/head';
import { SITE_DOMAIN } from '../util/constants';

export default function SEO({
  title = 'Alexandre Charlier',
  description = "profil et blog d'Alexandre Charlier, developpeur web pour les sites e-commerce ou vitrine, react, angular, javascript",
  url = SITE_DOMAIN,
 // image = 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800',
  creator = 'Alexandre charlier',
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <link key="canonical" rel="canonical" href={url} />
      <meta name="description" content={description} />
     {/*  <meta name="image" content={image} /> */}

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={url} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
    {/*   <meta name="og:image" property="og:image" content={image} /> */}

      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
     {/*  <meta name="twitter:image" content={image} /> */}
    </Head>
  );
}