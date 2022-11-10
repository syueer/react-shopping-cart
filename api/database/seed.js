// Require dotenv to avoid hardcoding of dbURL
require("dotenv").config();

const mongoose = require("mongoose");

// require shop item schema
const ItemModel = require("../models/shopItemModel");

// require shop item data
const itemData = require("./data");

// provide url to connect to db
const dbURL = process.env.MONGODB_URL;

// connect and seed data
mongoose.connect(dbURL, () => {
  console.log("connect to shopitems db");
  // // first time seeding:
  // ItemModel.insertMany(itemData)
  //   .then(() => {
  //     console.log("inserted");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // seeding data after the first time:
  console.log("Resetting shopitems collection");
  ItemModel.collection
    .drop()
    .then(() => {
      console.log("shopitems collection dropped");
      console.log("seeding data");
      // seed data
      return ItemModel.insertMany(itemData);
    })
    .then(() => {
      console.log("shopitems data inserted");
      mongoose.connection.close();
    });
});
