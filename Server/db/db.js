import { MongoClient } from 'mongodb';

const URI = "mongodb://localhost:27017/posts";

const mongoclient = new MongoClient(URI);
mongoclient.connect().then(() => {
    console.log("connected successfully")
}).catch((err) => {
    console.log(err);
});

export default mongoclient;
