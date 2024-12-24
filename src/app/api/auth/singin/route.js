import { generateAccessToken,
    generateRefreshToken,
    validationEmail,
    validationPassword,
    verifyPassword,
 } from "@/utils/auth";
 import UserModel from '@/models/User';
import connectDB from "@/config/db";
 
export async function POST(req) {
    try{
        connectDB();
        const body = await req.json();
        const {email , password} = body;
        // validations
        const isValidEmail = validationEmail(email);
        const isValidPassword = validationPassword(password);

        if(!isValidEmail || !isValidPassword){
            return Response.json(
                {message:"Email or Password Is Not Valid"},
                {status:419},
            );
        }

        const user = await UserModel.findOne({email});
        if(!user){
            return Response.json({message:"User Is Not Found"} ,{status:422});
        }

        const isCorrectPasswordHash = verifyPassword(password , user.password);
        if(!isCorrectPasswordHash){
            return Response.json(
                {message:"Email Or Password is Not Correct"},
                {status:401}
            )
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});


        await UserModel.findOneAndUpdate(
            {email},
            {
                $set:{
                    refreshToken
                }
            }
        );

        return Response.json(
            {message :"User Logged In Successfully"},
            {
                status:200,
                headers:{
                    "Set-Cookie":`token=${accessToken};path=/;httpOnly=true;`
                },
            }
        )

    } catch(error){
            return Response.json(
            {message:"Error Login Is Server" , error},
            {status:500}
        )
    }
}