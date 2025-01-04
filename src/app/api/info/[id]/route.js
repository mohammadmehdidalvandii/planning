import connectDB from "@/config/db";
import UserModel from '@/models/User';

export async function PUT(req , {params}){
    try{
        connectDB();

        const body = await req.json();
        const {username , email , phone ,password} = body;

        const userID = params?.id;

        if(!userID){
            return Response.json(
                {message:"Note UserID is Required"},
                {status:400}
            )
        };

        const updateUser = await UserModel.findOneAndUpdate(
            {_id:userID},
            {
                username,
                email,
                phone,
                password,
            },
            {new:true}
        );

        if(!updateUser){
            return Response.json(
                {message:"User Not Found"},
                {status:404}
            )
        };

        return Response.json(
            {message:"User Updated Successfully", user:updateUser},
            {status:200}
        )


    } catch(error){
        console.log("Error Updated info" ,error);
        return Response.json(
            {message:"Error updating Note sever =>" , error},
            {status:500}
        )
    }
}