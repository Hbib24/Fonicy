const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  image: String,
  email: String,
  status: {
    type: String,
    default: "active",
    enum: ["active", "banned", "unverified"]
  },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "item" }]
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
