const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('MongoDB connected🚀');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
module.exports = connectDB;
