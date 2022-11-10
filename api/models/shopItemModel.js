// Require mongoose
const mongoose = require("mongoose");
// Define a middle variable (a class) called Schema
const Schema = mongoose.Schema;
// Create a new schema based on the schema class
const shopItemSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
// define schema in mongoose model. First parameter is the name, second parameter is the schema
const ShopItemModel = mongoose.model("ShopItem", shopItemSchema);
// Export Recipe schema for access in other files
module.exports = ShopItemModel;
