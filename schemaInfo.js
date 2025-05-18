const mongoose = require("./db");
const schemaInfoSchema = new mongoose.Schema({
  version: Number
});
module.exports = mongoose.model("SchemaInfo", schemaInfoSchema);
