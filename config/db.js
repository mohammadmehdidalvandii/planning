import mongoose from "mongoose";

const connectDB = async () => {
    try{
        if(mongoose.connections[0].readyState){
            return true
        }else{
            await mongoose.connect(process.env.DATA_DB);
            console.log("Connect To DB is Successfully ✅")
        }
    } catch(error){
        console.log("DB connection failed" ,error);
    }
};

export default connectDB