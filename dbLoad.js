const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/photoApp"; // Change if using MongoDB Atlas
mongoose.connect(mongoURL);

const User = require("./userModel");
const Photo = require("./photoModel");
const SchemaInfo = require("./schemaInfo");
const data = require("../modelData/models");

mongoose.connection.once("open", async () => {
  console.log("Loading database...");
  await Promise.all([
    User.deleteMany({}),
    Photo.deleteMany({}),
    SchemaInfo.deleteMany({})
  ]);
  await Promise.all([
    User.insertMany(data.userList),
    Photo.insertMany(data.photoList),
    SchemaInfo.insertMany([data.schemaInfo])
  ]);
  console.log("✅ Database loaded successfully.");
  mongoose.connection.close();
});
