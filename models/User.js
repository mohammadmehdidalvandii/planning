const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    refreshToken: String,
});

const model = mongoose.models.User || mongoose.model("User" , schema);
module.exports = model;