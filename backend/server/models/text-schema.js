const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let textSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "texts",
  }
);

module.exports = mongoose.model("Text", textSchema);
