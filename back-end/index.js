import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

//command: "nodemon server" to start the backend server

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.port || 8000;
console.log("Port: " + port);
console.log("URI :" + process.env.YOUR_DOCTOR_DB_URI);
MongoClient.connect(process.env.YOUR_DOCTOR_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 1000,
  useNewUrlParser: true,
}) 
.catch((err) => {
  console.error(err.stack);
  process.exit(1);
})
.then(async (client) => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});

//2.
// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://yourdoctor:yourdoctor.mongodb@yourdoctorcluster.bdtak.mongodb.net/YourDoctor?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Connected successfully");
//   client.close();
// });

//3.
// import app from "./server.js";
// // import mongodb from "mongodb";
// import dotenv from "dotenv";
// import { MongoClient, ServerApiVersion } from "mongodb";

// dotenv.config();
// const port = process.env.port || 8000;
// console.log("Port: " + port);
// console.log("URI :" + process.env.YOUR_DOCTOR_DB_URI);

// const client = new MongoClient(process.env.YOUR_DOCTOR_DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// // client.connect((err) => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });

//4.
// import app from "./server.js";
// import mongodb from "mongodb";
// import dotenv from "dotenv";
// // const {MongoClient} = require('mongodb');
// // import MongoClient from "mongodb";
// dotenv.config();
// const client = new mongodb.MongoClient(process.env.YOUR_DOCTOR_DB_URI)
// await client.connect(() => {
// //   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Connected");
//   client.close();
//   }).catch((err) => {
//   console.error(err.stack);
//   process.exit(1);
// })

// try {
//     await client.connect();

//     // await listDatabases(client);
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
 
// } catch (error) {
//     console.error(error.stack);
// }