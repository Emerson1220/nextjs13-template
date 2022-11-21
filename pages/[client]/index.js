// Librairies
import { useRouter } from 'next/router';
import { connectToMongoDb } from '../../helpers/mongodb';

// Composants
import CarteDeProjet from '../../components/CarteDeProjet/CarteDeProjet';
import FiltresDeClient from '../../components/FiltresDeClient/FiltresDeClient';

export default function ProjetsDuClient(props) {
  // Variables
  const router = useRouter();
  let nomDuClient = router.query.client;

  // if (nomDuClient === 'perso') {
  // 	nomDuClient = 'Projets personnels';
  // } else {
  // 	nomDuClient = `Projets de ${nomDuClient}`;
  // }

  return (
    <>
      <h1>{nomDuClient}</h1>

      {/* Filtres */}
      <FiltresDeClient
        client={router.query.client}
        annees={props.annees}
      />

      <div>
        {props.projets.map((projet) => (
          <CarteDeProjet projet={projet} key={projet._id} />
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Connexion à MongoDB
  const client = await connectToMongoDb();
  const db = client.db('projets');
  // Récupérer les projets
  const projets = await db.collection('mes_Projets').find().toArray();

  let arrayPaths = projets.map((projet) => {
    // if (projet.client == 'Projet personnel') {
    //   return 'perso';
    // } else {
    return projet.client;
    // }
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
  // Variables
  let projets;
  let annees;
  const { params } = context;
  let clientParam = params.client;

  if (clientParam == 'perso') {
    clientParam = 'Projet personnel';
  }

  try {
    const client = await connectToMongoDb();
    const db = client.db('projets');
    // Récupérer les projets
    projets = await db
      .collection('mes_Projets')
      .find({ client: clientParam })
      .sort({ dateDePublication: 1 })
      .toArray();
    projets = JSON.parse(JSON.stringify(projets));

    annees = projets.map((projet) => projet.annee);
    annees = [...new Set(annees)];
  } catch (error) {
    projets = [];
  }

  return {
    props: {
      projets: projets,
      annees: annees,
    },
    revalidate: 3600,
  };
}
