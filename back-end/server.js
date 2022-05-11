const express = require("express");
const cors = require("cors");
const basicUserRouter = require("./routes/basicUser.js");
const doctorRouter = require("./routes/doctor.js");
const specialtyRouter = require("./routes/specialty.js");
const patientRouter = require("./routes/patient");
const AccountRouter = require("./routes/account");
const ImageUploadRouter = require("./routes/ImageUploadRouter");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
/* This module is responsible for creating and manipulating
our server */
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  session({
    secret: "Test Secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.YOUR_DOCTOR_DB_URI,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
//Routes and APIs
// app.use("/test", test);
app.use("/basicUser", basicUserRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);
app.use("/specialty", specialtyRouter);
app.use("/account", AccountRouter);
app.use("/imageUpload", ImageUploadRouter);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
