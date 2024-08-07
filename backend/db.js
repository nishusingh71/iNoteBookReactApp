const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/iNotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle the error appropriately
  }
};

module.exports = connectToMongo;