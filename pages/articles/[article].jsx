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
  // Connexion à MongoDB
  // const client = await connectToDatabase();
  // const db = client.db();

  const client = await connectToMongoDb();
  const db = client.db('projets');

  // Récupérer les projets
  const projets = await db.collection('projets').find().toArray();

  let arrayPaths = projets.map((projet) => {
    return projet.client;
  });

  arrayPaths = [...new Set(arrayPaths)];

  const dynamicPaths = arrayPaths.map((path) => ({
    params: { client: path },
  }));

  return {
    paths: dynamicPaths,
    fallback: false,
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
