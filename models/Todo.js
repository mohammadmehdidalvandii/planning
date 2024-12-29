const mongoose = require("mongoose");
require("./User");

const schema = new mongoose.Schema({
    username:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    subject:{
        type:String,
        required: true,
    },
    data:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
});

const model = mongoose.models.Todo || mongoose.model("Todo" , schema);
module.exports = model;