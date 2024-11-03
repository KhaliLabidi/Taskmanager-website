const mongoose = require("mongoose");
require("dotenv").config();

// Define the dbConnect function
const dbConnect = () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.error("Unable to connect to MongoDB Atlas!", error);
    });
};

// Export the dbConnect function
module.exports = dbConnect;
