const { MongoClient } = require("mongodb");

  async function run() {
  const dotenv = require('dotenv');
  dotenv.config();
  // Replace the uri string with your connection string.
  const uri =
    `mongodb+srv://jackhalcisak:${process.env.PASSWORD}@cluster0.wwajsji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = new MongoClient(uri);
  await client.connect();

  const dbName = "messageBoard";
  const collectionName = "messageBoard";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const messages = [
    {
      user: 'Jack',
      email: 'jackhalcisak@Outlook.com',
      age: 26,
      message: 'Hi my name is jack',
      time: new Date(),
    },
    {
      user: 'Bill',
      email: 'Billiams@Outlook.com',
      age: 45,
      message: 'Yall got any more of that cracker jacks?',
      time: new Date(),
    },
    {
      user: 'Debrah',
      email: 'debbiesk@Outlook.com',
      age: 67,
      message: 'Yee hoy me noy me hoy me shmorgan',
      time: new Date(),
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(messages);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch(err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }
}
run();