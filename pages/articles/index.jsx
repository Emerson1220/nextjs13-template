//Libraire
// import { MongoClient } from 'mongodb';
import { connectToMongoDb } from '../../helpers/mongodb';

//Components
import Card from '../../components/UI/Card/Card';

//Style
import style from './page.module.scss';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

export default function Index(props) {
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
      <main className={style.Articles}>
        <h1>Articles</h1>
        {props.data.map((article) => (
          <Card key={article._id} data={article} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  // let connect;
  let data;

  try {
    const connect = await connectToMongoDb();
    const db = connect.db();

    data = await db.collection('mes_Projets').find().toArray();
  } catch (error) {
    data = [];
  }
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
