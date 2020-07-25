const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    text: {
      type: String,
      required:[true, 'Please enter a message!!']
  }
  },
  { timestamps: true },
  { versionKey: false}
);

module.exports = mongoose.model("Data", DataSchema);