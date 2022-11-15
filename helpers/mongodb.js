//Librairies
import { MongoClient } from 'mongodb';

export async function connectMongoDb() {
  // const uri = process.env.MONGODB_URI;
  //Connexion dataBase
  const client = await MongoClient.connect(
    'mongodb+srv://Emerson:xNeP7Dz7wj0mCQrL@cluster0.bkdzj6c.mongodb.net/NetxJS13?retryWrites=true&w=majority'
  );
  //Connexion à la db
  const db = client.db();
  return client;
}
