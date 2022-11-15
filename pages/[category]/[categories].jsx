//Librairies
import { useRouter } from 'next/router';

//Components
import CardSlug from '../../components/utils/Card/CardSlug';
import FiltersCategories from '../../components/utils/Filters/FilterCategories';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

//Styles
import styles from './categories.module.scss';

export default function Categories(props) {
  const router = useRouter();
  let category = router.query.category;
  return (
    <>
      <HeadSeo
        title={`Title`}
        description={`Description`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />{' '}
      <main className={styles.Categories}>
        {' '}
        <h1>{category}</h1>
        <FiltersCategories category={router.query.category} />
        <div className={styles.Content}>
          {/* <CardSlug key={props.projet._id} projet={props.projet} />
          <CardSlug key={props.projet._id} projet={props.projet} />
          <CardSlug key={props.projet._id} projet={props.projet} /> */}
        </div>
      </main>
    </>
  );
}
