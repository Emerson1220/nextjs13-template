import { connectMongoDb } from '../../helpers/mongodb';

//Components
import CardSlug from '../../components/utils/Card/CardSlug';

//SEO
import siteMetadata from '../../data/siteMetaData';
import HeadSeo from '../../components/seo/HeadSeo';

//Styles
import styles from './page.module.scss';

export default function SlugIndex(props) {
  console.log(props);
  return (
    <>
      <HeadSeo
        title={`Title`}
        description={`Description`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />{' '}
      <main className={styles.SlugIndex}>
        {' '}
        <h1>Articles</h1>
        <div className={styles.Content}>
          {props.projets.map((projet) => (
            <CardSlug key={projet._id} projet={projet} />
          ))}
        </div>
      </main>
    </>
  );
}

// Toujours async car on attend la réponse avant d'injecter les informations dynamique.
export async function getStaticProps() {
  //A faire - Rajouter url dans .env
  let projets;
  let client;
  const collection = 'articles';
  const uri = process.env.MONGODB_URI;

  try {
    // data = await MongoClient.connect(uri);
    client = await connectMongoDb();
    //Connexion à la debugger
    const db = client.db();

    //Récupérer toutes (find()) les informations - chercher la cat. sous forme de tableau
    projets = await db.collection(collection).find({}).toArray();
  } catch (error) {
    //Si Erreur, renvoi un tableau vide
    projets = [];
  }
  return {
    props: {
      //analyse une chaîne JSON, en construisant la valeur JavaScript ou l'objet décrit par la chaîne - format strings
      projets: JSON.parse(JSON.stringify(projets)),
    },
  };
}
