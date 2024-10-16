require('dotenv').config();
const url = process.env.DATABASE_URL

const mongoose = require("mongoose");

mongoose
  .connect(url)
  .then(() => {
    console.log("Connection Established with database");
  })
  .catch((err) => {
    console.log("Connection failed with database");
  });
