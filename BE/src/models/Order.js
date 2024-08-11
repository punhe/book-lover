const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    orderItem: [
      {
        name: { type: String, require: true },
        amount: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        product: {
          type: mongoose.Schema.Type.ObjectID,
          ref: "Product",
          require: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, require: true },
      address: { type: String, require: true },
      city: { type: String, require: true },
      country: { type: String, require: true },
      phone: { type: Number, require: true },
    },
    paymentMethod: { type: String, require: true },
    itemsPrices: { type: Number, require: true },
    shippingPrice: { type: Number, require: true },
    taxPrice: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
    user: { type: mongoose.Schema.Type.ObjectID, require: true, ref: "User" },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    Timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
