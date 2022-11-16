//Librairies
import { MongoClient } from 'mongodb';

export async function connectToMongoDb() {
  //Connexion dataBase
  const data = await MongoClient.connect(process.env.MONGODB_URI);
  //Connexion à la db
  const db = data.db();
  return data;
}
