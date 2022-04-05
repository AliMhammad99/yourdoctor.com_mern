import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

//command: "nodemon server" to start the backend server

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.port || 8000;

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
