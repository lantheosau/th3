const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/photoApp"; // Change if using MongoDB Atlas
mongoose.connect(mongoURL);
module.exports = mongoose;
