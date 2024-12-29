import mongoose from "mongoose";
require("./User");

const schema = new mongoose.Schema({
    username:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

const model = mongoose.models.Note || mongoose.model("Note" ,schema);
module.exports = model;
