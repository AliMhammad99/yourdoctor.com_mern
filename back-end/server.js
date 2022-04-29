const express = require("express");
const cors = require("cors");
const specialtyRouter = require("./routes/specialty.js");

/* This module is responsible for creating and manipulating
our server */
const app = express();

app.use(cors());
app.use(express.json());

//Routes and APIs
// app.use("/test", test);
app.use("/specialty", specialtyRouter);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
