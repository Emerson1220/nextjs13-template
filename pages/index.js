//Librairies

//Components
import BtnStandard from '../components/utils/Btn/BtnPrimary';
import BtnAnimated from '../components/utils/Btn/BtnAnimated.jsx';

//SEO
import siteMetadata from '../data/siteMetaData';
import HeadSeo from '../components/seo/HeadSeo';

//Styles
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      {' '}
      <HeadSeo
        title={`Title`}
        description={`Description`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <main className={styles.Home}>
        {' '}
        <h1>Home</h1>
        <BtnAnimated BtnName='Button' />
      </main>
    </>
  );
}
