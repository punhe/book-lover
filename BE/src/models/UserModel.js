const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    passwords: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
    phone: { type: Number, require: true },
    access_token: { type: String, require: true },
    refresh_token: { type: String, require: true },
  },
  {
    Timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
