import express from "express";
import cors from "cors";
import test from "./api/test.route.js";

/* This module is responsible for creating and manipulating
our server */
const app = express();

app.use(cors());
app.use(express.json());

//Routes and APIs
app.use("/", test);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
