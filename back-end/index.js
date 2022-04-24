const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const basicUser = require("./models/basic_user");
const account = require("./models/account");
const notification = require("./models/notification");
const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

var signUp = {
  username: "",
  password: "",
  reEnterPassword: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: new Date(),
};

app.use(cors(corsOptions));
app.use(express.json());
mongoose
  .connect(process.env.YOUR_DOCTOR_DB_URI, {
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(
    "Server is started on http://localhost:" + (process.env.PORT || 5000)
  );
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  let password = req.body.password;
  let phoneNumber_or_emailAddress = req.body.phoneNumber_or_emailAddress;
  console.log(password + "     " + phoneNumber_or_emailAddress);
  // res.redirect("/");
  res.send("yyy");
  //alert("yyy");
});

app.post("/signUp", (req, res) => {
  console.log("Connected to React1");
  signUp.username = req.body.username;
  signUp.password = req.body.password;
  signUp.firstName = req.body.firstName;
  signUp.lastName = req.body.lastName;
  signUp.emailAddress = req.body.emailAddress;
  signUp.gender = req.body.gender;
  signUp.phoneNumber = req.body.phoneNumber;
  signUp.dateOfBirth = req.body.dateOfBirth;
  // console.log(
  //   signUp.username +
  //     "  " +
  //     signUp.password +
  //     "  " +
  //     signUp.reEnterPassword +
  //     "  " +
  //     signUp.firstName +
  //     "  " +
  //     signUp.lastName +
  //     "  " +
  //     signUp.emailAddress +
  //     "  " +
  //     signUp.gender +
  //     "  " +
  //     signUp.phoneNumber +
  //     "  " +
  //     signUp.dateOfBirth
  // );
  CreatebasicUser();
});

function CreatebasicUser() {
  basicUser.create(
    {
      first_name: signUp.firstName,
      last_name: signUp.lastName,
      gender: signUp.gender,
      date_of_birth: signUp.dateOfBirth,
      phone_number: parseInt(signUp.phoneNumber),
      profile_picture: "person.jpg",
    },
    (error, user) => {
      console.log(error, user);
    }
  );
}

// account.create(
//   {
//     email: "ali@gmail.com",
//     username: "alimhmd",
//     password_salt: "grrhtnggrnrreww",
//     password_hash: "fbfnhtgrteereed",
//     balance: 0,
//     is_activated: false,
//     user_id: mongoose.Types.ObjectId("6256cae0f6d570985782ae3f"),
//   }
//   // ,
//   // (error, user) => {
//   //   console.log(error, user);
//   // }
// );

// basicUser.create(
//   {
//     first_name: "Marwan",
//     last_name: "Mcheik",
//     gender: "male",
//     date_of_birth: "2020-09-01",
//     phone_number: 71223456,
//     profile_picture: "person.jpg",
//     user_type: "patient",
//   }
//   // ,
//   // (error, user) => {
//   //   console.log(error, user);
//   // }
// );

// account.create(
//   {
//     email: "ali@gmail.com",
//     username: "alimhmd",
//     password_salt: "grrhtnggrnrreww",
//     password_hash: "fbfnhtgrteereed",
//     balance: 30,
//     is_activated: true,
//     user_id: mongoose.Types.ObjectId("6256cae0f6d570985782ae3f"),
//   }
//   // ,
//   // (error, user) => {
//   //   console.log(error, user);
//   // }
// );
// var account = new account({
//   email: "a@gmail.com",
//   username: "rrr",
//   password_salt: "grrhtnggrnrreww",
//   password_hash: "fbfnhtgrteereed",
//   balance: 30,
//   is_activated: true,
//   user_id: mongoose.Types.ObjectId("6256cae0f6d570985782ae3f"),
//   notifications : [{

//   }]
// });
// account.save();
// console.log(account.balance);

// notification.create(
//   {

//     title: "notification 1",
//     description: "notification description",
//     importance: "medium", //low medium high urgent
//     cleared: false,
//     is_viewed: true,
//   }
// ,
// (error, user) => {
//   console.log(error, user);
// }
// );

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
