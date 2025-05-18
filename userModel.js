const mongoose = require("./db");
const userSchema = new mongoose.Schema({
  _id: String,
  first_name: String,
  last_name: String,
  location: String,
  description: String,
  occupation: String
});
module.exports = mongoose.model("User", userSchema);
