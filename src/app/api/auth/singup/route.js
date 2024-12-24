import connectDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken , hashPassword} from "@/utils/auth";

export async function POST(req){
   connectDB();

   const body = await req.json();
   const {username , phone , email , password} = body;

   // Validations
   const isUserExist = await UserModel.findOne({
       $or : [{username} , {email} , {phone}],
   });

   if(isUserExist){
       return Response.json(
           {message:"The Username Or Email or Phone Exist Already ❌"},
           {status:422},
       )
   };

   // Hashed Password 
   const hashedPassword = await hashPassword(password);
   // created access token user
   const accessToken = generateAccessToken({username});

   // find user is roles 
   const user = await UserModel.find({});

   await UserModel.create({
       username,
       email,
       phone,
       password: hashedPassword,
       role: user.length > 0 ? "USER" : "ADMIN",
   });

   return Response.json(
       {message:"User Create Account Is Successfully ✅"},
       {
           status:201,
           headers:{"Set-Cookie": `token=${accessToken};path=/;httpOnly=true`},
       }
   );

}
