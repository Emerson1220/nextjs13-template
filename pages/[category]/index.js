//Librairies
import { useRouter } from 'next/router';
import { connectMongoDb } from '../../helpers/mongodb';

//components
import FiltersCategories from '../../components/utils/Filters/FilterCategories';
import CardSlug from '../../components/utils/Card/CardSlug';

//Styles
import style from './category.module.scss';

export default function Index(props) {
  const router = useRouter();
  let category = router.query.category;

  return (
    <div className={style.Category}>
      <h1>check:{category}</h1>
      <FiltersCategories category={router.query.category} />
      <div className={style.Content}>
        {props.projets.map((projet) => (
          <CardSlug key={projet._id} projet={projet} />
        ))}
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  // Variable
  const collection = 'articles';
  //Connect à la BD
  const client = await connectMongoDb();
  const db = client.db();
  //Récupération de la data par collection
  const projets = await db.collection(collection).find().toArray();
  const dynamicPaths = projets.map((projet) => ({
    params: { client: projet.client },
  }));
  return {
    //Paramètre sous forme d'objet
    paths: dynamicPaths,
    //False = Si page n'existe pas, affichage d'une erreur 404 //True = Autorisation d'une requete à la DB (getStaticProps() avant affichage //'blocking' = Block l'affichage tant que la req n'est pas effectuée
    fallback: false,
  };
}

// Toujours async car on attend la réponse avant d'injecter les informations dynamique.
export async function getStaticProps(context) {
  //A faire - Rajouter url dans .env
  let projets;
  let client;
  const collection = 'articles';
  const uri = process.env.MONGODB_URI;
  const { params } = context;
  let clientParam = params.client;

  try {
    // data = await MongoClient.connect(uri);
    const client = await connectMongoDb();
    //Connexion à la db
    const db = client.db();

    //Récupérer toutes (find()) les informations - chercher la cat. sous forme de tableau
    projets = await db
      .collection(collection)
      .find({ client: clientParam })
      // .sort({ metacritic: -1 })
      // .limit(20)
      .toArray();
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
