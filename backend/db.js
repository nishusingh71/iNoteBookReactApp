const mongoose = require("mongoose");
// require('dotenv').config()
// const url = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://iNoteBook:28opjLspbS67jUqH@inotebook.q6gd2.mongodb.net/?retryWrites=true&w=majority&appName=iNoteBook', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error appropriately
  }
};

module.exports = connectToMongo;
