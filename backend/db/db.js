require("dotenv").config();
const mongoose = require("mongoose");

const mongo_url = process.env.MONGO;

const DBconnection = async () => {
  mongoose
    .connect(mongo_url)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((e) => {
      console.log("Error connecting to database");
    });
};

module.exports = DBconnection;
