const mongoose = require("mongoose");

function dbconnection() {
    return mongoose.connect("mongodb+srv://adityajha:root@cluster0.slgay.mongodb.net/mystudent")
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err);
        });
}

module.exports = dbconnection;