import Head from 'next/head';
import siteMetadata from '../../data/siteMetaData';

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogType,
  ogImageUrl,
  children,
}) => {
  return (
    <Head>
      {/* //basic metadata */}
      <title>{title}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta name='description' content={description} />
      {/* //canonical link */}
      <link rel='canonical' href={canonicalUrl} />
      {/* //open graph metadata */}
      <meta property='og:locale' content='fr' />
      <meta
        property='og:site_name'
        content={siteMetadata.companyName}
      />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImageUrl} />
      <meta property='og:url' content={canonicalUrl} />
      {children}
    </Head>
  );
};

export default HeadSeo;
