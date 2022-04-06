const mongoose = require('mongoose');

// establish a connection to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // remember to insert mongo uri into .env file

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;