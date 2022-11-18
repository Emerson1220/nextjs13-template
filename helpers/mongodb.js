//Librairies
import { MongoClient } from 'mongodb';

// export async function connectToMongoDb() {
//   const data = await MongoClient.connect(process.env.MONGODB_URI);
//   const db = data.db();
//   return data;
// }

export async function connectToMongoDb() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  return client;
}
