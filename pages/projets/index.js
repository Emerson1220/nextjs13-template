// Librairie
import { connectToMongoDb } from '../../helpers/mongodb';

// Composant
import CarteDeProjet from '../../components/CarteDeProjet/CarteDeProjet';

export default function Projets(props) {
  return (
    <>
      <h1>Mes Projets</h1>
      <div>
        {props.projets.map((projet) => (
          <CarteDeProjet projet={projet} key={projet._id} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Variables
  let projets;
  let client;

  try {
    const client = await connectToMongoDb();
    const db = client.db('projets');

    // Récupérer les projets
    projets = await db
      .collection('mes_Projets')
      .find()
      //   .sort({ dateDePublication: 'desc' })
      .toArray();
  } catch (error) {
    projets = [];
  }

  return {
    props: {
      projets: JSON.parse(JSON.stringify(projets)),
    },
  };
}
