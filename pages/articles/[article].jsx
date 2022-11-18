//Libraire
import { connectToMongoDb } from '../../helpers/mongodb';
import { useRouter } from 'next/router';
import { Link } from 'next/link';

//Style
import style from './article.module.scss';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

export default function Index(props) {
  const router = useRouter();
  console.log(props);
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
      <main className={style.Article}>
        <h1>{router.query.article}</h1>
        <Link href={'/item-1'}>Mon lien</Link>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { article: post.article },
  }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  // let connect;
  let article;
  const { params } = context;
  const articleParams = params.article;

  try {
    const article = await connectToMongoDb();
    const db = article.db('projets');

    const articles = await db
      .collection('mes_Projets')
      .find({ article: articleParams })
      .toArray();
  } catch (error) {
    article = [];
  }

  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
  };
}
