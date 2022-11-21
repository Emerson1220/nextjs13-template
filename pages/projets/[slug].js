// Librairies
import Link from 'next/link';
import { connectToMongoDb } from '../../helpers/mongodb';

export default function Projet(props) {
  // Variables
  const { titre, description, client, slug } = props.projet;
  let clientAAfficher = client;

  return (
    <>
      <h1>{titre}</h1>
      <small>
        <Link href={`/${clientAAfficher}`}>
          <div>
            Catégorie: <div>{slug}</div>
          </div>
          <h2>{titre}</h2>
          <p>{description}</p>
        </Link>
      </small>
    </>
  );
}

export async function getServerSideProps(context) {
  // Variables
  let projetRecupere;
  let { params } = context;
  const slug = params.slug;

  try {
    const client = await connectToMongoDb();
    const db = client.db('projets');

    // Récupérer le projet en cours
    projetRecupere = await db
      .collection('mes_Projets')
      .find({ slug: slug })
      .toArray();
  } catch (error) {
    projetRecupere = [];
  }

  if (!projetRecupere[0]) {
    return {
      // notFound: true,
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      projet: JSON.parse(JSON.stringify(projetRecupere))[0],
    },
  };
}
