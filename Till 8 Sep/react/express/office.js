const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://iamprasath02:Prasath2002@prasath.eelnn.mongodb.net/';
const client = new MongoClient(url);


// Database Name
const dbName = 'office';

async function insertDate(){
let empData ={
    "name":"abc",
    "mobile":"9345265985",
    "address":"58 chennai"
}    
await client.connect();
const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log("inserted");
}

insertDate();