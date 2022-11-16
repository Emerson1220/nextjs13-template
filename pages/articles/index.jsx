//Libraire
// import { MongoClient } from 'mongodb';
import { connectToMongoDb } from '../../helpers/mongodb';

//Components
import Card from '../../components/UI/Card/CardSlug';

//Style
import style from './page.module.scss';

export default function index(props) {
  return (
    <div className={style.Articles}>
      <h1>Articles</h1>
      {props.data.map((article) => (
        <Card key={article._id} data={article} />
      ))}
    </div>
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
