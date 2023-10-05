const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.opetions)
        .then((data) => {
            console.log("Database connection successfully!");
        })
        .catch((error) => {
            console.log("Database connetion error:", error);
        });
};

module.exports = { connectDB };