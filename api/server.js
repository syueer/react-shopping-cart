/////////////////////
// DEPENDENCIES
/////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT; // 5000 as in the .env file
const dbURL = process.env.MONGODB_URL;

/////////////////////
// INITIALISATION
/////////////////////

const connect = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to MongoDB shopitems");
  } catch (error) {
    console.error(error);
  }
};

connect();

app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
