const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbRoute =
  "mongodb+srv://willib:Will6688%23@cluster0-it15n.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

module.exports = mongoose.model("Data", DataSchema);