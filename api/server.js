/////////////////////
// DEPENDENCIES
/////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT; // 3001 as in the .env file
const dbURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Item = require("../api/models/shopItemModel");

// Configure routes
const router = express.Router();
router.get("/shopitems", async (req, res) => {
  const items = await Item.find({}).exec();
  res.status(200).json(items);
});

app.use("/", router);

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

app.listen(PORT, (req, res) => {
  console.log("Server started on Port:", PORT);
});
