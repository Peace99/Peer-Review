const mongoose = require("mongoose");

//parse in the connection string
//second argument to the connect method, is to parse in options for deprecation warning
//the connect method returns a promise
const connectDB = async url => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log(err));
};

module.exports = connectDB;
