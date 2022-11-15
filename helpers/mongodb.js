//Librairies
import { MongoClient } from 'mongodb';

export async function connectMongoDb() {
  const uri = process.env.MONGODB_URI;
  //Connexion dataBase
  const client = await MongoClient.connect(uri);
  //Connexion à la db
  const db = client.db();
  return client;
}
