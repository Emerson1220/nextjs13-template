//Librairies
import { useRouter } from 'next/router';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

//Styles
import styles from './slug.module.scss';

export default function Slug() {
  const router = useRouter();
  //   console.log(router);

  //Methode push (retour en arrière possible)
  const onClickPush = () => {
    router.push('/');
  };

  //Methode replace (retour en arrière impossible)
  const onClickReplace = () => {
    router.replace('/');
  };

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
        <h1>{router.query.slug}</h1>
        <button onClick={onClickPush}>Push</button>
        <button onClick={onClickReplace}>Replace</button>
      </main>
    </>
  );
}