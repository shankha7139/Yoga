const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url =
  "mongodb://yoga:yoga@ac-huqk0ba-shard-00-00.q3gnpan.mongodb.net:27017,ac-huqk0ba-shard-00-01.q3gnpan.mongodb.net:27017,ac-huqk0ba-shard-00-02.q3gnpan.mongodb.net:27017/?ssl=true&replicaSet=atlas-oa2j5m-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const dbName = "Yoga";
const collectionName = "members";

const connectDB = async () => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected successfully to Mongo Db server  " );
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const documents = await collection.find({}).toArray();
    global.members = documents;
    console.log(documents)
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;