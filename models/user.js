const mongoose = require("mongoose");

//mongoose.connect("mongodb://127.0.0.1:27017/employeemanagement", { useMongoClient : true });
mongoose.connect("mongodb://admin:abc123@ds255797.mlab.com:55797/heroku_0rc9hrwf", { useMongoClient : true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    password : String
});

const User = mongoose.model("user", userSchema);

module.exports = User;