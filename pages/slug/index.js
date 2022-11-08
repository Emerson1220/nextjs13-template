//Librairies

//Components
import CardSlug from '../../components/utils/Card/CardSlug';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

//Styles
import styles from './page.module.scss';

export default function index() {
  return (
    <>
      <HeadSeo
        title={`Title`}
        description={`Description`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />{' '}
      <main className={styles.Home}>
        {' '}
        <h1>Slug</h1>
        <div className={styles.Content}>
          <CardSlug />
          <CardSlug />
          <CardSlug />
        </div>
      </main>
    </>
  );
}
