const mongoose = require("./db");
const photoSchema = new mongoose.Schema({
  _id: String,
  user_id: String,
  file_name: String,
  date_time: String,
  comments: [{
    comment: String,
    date_time: String,
    user: {
      _id: String,
      first_name: String,
      last_name: String
    }
  }]
});
module.exports = mongoose.model("Photo", photoSchema);
