const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./server.js");

// To access environmental variables inside .env
dotenv.config();

// Back-end server port
const port = process.env.PORT || 8000;

// Connection to MongoDB Atlas
mongoose.connect(process.env.YOUR_DOCTOR_DB_URI, {
  useNewUrlParser: true,
});

// Check if connection succeeded
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Start the backend server
app.listen(port, () => {
  console.log("Server started on http://localhost:" + port);
});

// .catch((err) => {
//   console.error(err.stack);
//   process.exit(1);
// })
// .then(async (client) => {
//   //After successful connection, the backend (app) starts listening on the port
//   app.listen(port, () => {
//     console.log("Server is started on http://localhost:" + port);
//   });
// });

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// var signUp = {
//   username: "",
//   password: "",
//   reEnterPassword: "",
//   firstName: "",
//   lastName: "",
//   emailAddress: "",
//   phoneNumber: "",
//   gender: "",
//   dateOfBirth: new Date(),
// };

// app.use(cors(corsOptions));
//app.use(express.json());

// app.post("/post", (req, res) => {
//   console.log("Connected to React");
//   let password = req.body.password;
//   let phoneNumber_or_emailAddress = req.body.phoneNumber_or_emailAddress;
//   console.log(password + "     " + phoneNumber_or_emailAddress);
//   // res.redirect("/");
//   res.send("yyy");
//   //alert("yyy");
// });

// app.post("/signUp", (req, res) => {
//   console.log("Connected to React1");
//   signUp.username = req.body.username;
//   signUp.password = req.body.password;
//   signUp.firstName = req.body.firstName;
//   signUp.lastName = req.body.lastName;
//   signUp.emailAddress = req.body.emailAddress;
//   signUp.gender = req.body.gender;
//   signUp.phoneNumber = req.body.phoneNumber;
//   signUp.dateOfBirth = req.body.dateOfBirth;
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
//   CreatebasicUser();
// });

// function CreatebasicUser() {
//   basicUser.create(
//     {
//       first_name: signUp.firstName,
//       last_name: signUp.lastName,
//       gender: signUp.gender,
//       date_of_birth: signUp.dateOfBirth,
//       phone_number: parseInt(signUp.phoneNumber),
//       profile_picture: "person.jpg",
//     },
//     (error, user) => {
//       console.log(error, user);
//     }
//   );
// }

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
