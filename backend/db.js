const mongoose = require("mongoose");
// require('dotenv').config()
// const url = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://iNoteBook:OFBQHhxzNIvadwGl@notebooks.mhpjv3y.mongodb.net/iNotes');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error appropriately
  }
};

module.exports = connectToMongo;
