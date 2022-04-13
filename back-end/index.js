import dotenv from "dotenv";
const mongoose = require("mongoose");
const user = require("./models/user");

mongoose
  .connect(process.env.YOUR_DOCTOR_DB_URI, {
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

user.create(
  {
    name: "Marwan",
    age: 22,
  }
  // ,
  // (error, user) => {
  //   console.log(error, user);
  // }
);

//find the raws where the name fields contain a
// user.find(
//   {
//     name: /a/,
//   },
//   (error, user) => {
//     console.log(error, user);
//   }
// );

//update a raw
// var id = "624cd2a165f38d648d555475";
// user.findByIdAndUpdate(
//   id,
//   {
//     name: "Updated name",
//   },
//   (error, user) => {
//     console.log(error, user);
//   }
// );

//delete a single record
// var id = "624cd2a165f38d648d555475";
// user.findByIdAndDelete(id, (error, user) => {
//   console.log(error, user);
// });

//search a user by id
// var id = "624cd2d166bcf4e382daaf64";
// user.findById(id, (error, user) => {
//   console.log(error, user);
// });

//find all users within this table
// user.find({}, (error, user) => {
//   console.log(error, user);
// });

//1
// import app from "./server.js";
// import mongodb from "mongodb";
// import dotenv from "dotenv";

// //command: "nodemon server" to start the backend server

// dotenv.config();
// const MongoClient = mongodb.MongoClient;

// const port = process.env.port || 8000;
// console.log("Port: " + port);
// console.log("URI :" + process.env.YOUR_DOCTOR_DB_URI);
// MongoClient.connect(process.env.YOUR_DOCTOR_DB_URI, {
//   maxPoolSize: 50,
//   wtimeoutMS: 1000,
//   useNewUrlParser: true,
// })
// .catch((err) => {
//   console.error(err.stack);
//   process.exit(1);
// })
// .then(async (client) => {
//   app.listen(port, () => {
//     console.log(`listening on port ${port}`);
//   });
// });

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
