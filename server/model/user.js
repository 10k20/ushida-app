const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  login: { type: String, default: null},
  privileges: { type: String, default: 'user'},
  image: { type: String, default: null},
  country: { type: String, default: null},
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);