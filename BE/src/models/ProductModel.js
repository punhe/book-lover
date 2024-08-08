const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    countInStock: { type: String, require: true },
    rating: { type: Number, require: true },
    description: { type: String, require: true },
  },
  {
    Timestamps: true,
  }
);
const User = mongoose.model("Product", productSchema);
module.exports = Product;
