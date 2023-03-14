const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./database/connect')



const port = 5500;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()