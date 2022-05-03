const express = require("express");
const cors = require("cors");
const basicUserRouter = require("./routes/basicUser.js");
const doctorRouter = require("./routes/doctor.js");
const specialtyRouter = require("./routes/specialty.js");
const patientRouter = require("./routes/patient");
const AccountRouter = require("./routes/account");

/* This module is responsible for creating and manipulating
our server */
const app = express();

app.use(cors());
app.use(express.json());

//Routes and APIs
// app.use("/test", test);
app.use("/basicUser", basicUserRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);
app.use("/specialty", specialtyRouter);
app.use("/account", AccountRouter);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
