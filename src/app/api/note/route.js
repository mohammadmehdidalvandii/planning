import connectDB from "@/config/db";
import NoteModel from '@/models/Note';

export async function POST(req) {
    try{
        connectDB();

        const body = await req.json();

        const{
            username,
            subject,
            text,
            date,
        } = body

        await NoteModel.create({
            username,
            subject,
            text,
            date,
        });

        return Response.json(
            {message:"Created New Note Successfully ✅"},
            {status:201}
        )

    } catch(error){
        console.log("Error" , error);
        return Response.json(
            {message:"Error Server Note" ,error}
        )
    }
}