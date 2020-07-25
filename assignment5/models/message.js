const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
      text: {
        type: String,
        required:[true, 'Please enter a message!!']
    },
    id: {
      type: Number,
      required: [true, "ID is neccessary"]
    }
    },
    { timestamps: true },
    { versionKey: false}
  );
  
  const Message = mongoose.model('Message', DataSchema);
  module.exports = Message;