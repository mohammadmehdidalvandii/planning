import connectDB from "@/config/db";
import TodoModel from '@/models/Todo';

export async function POST(req){
    try{
        connectDB();

        const body = await req.json();

        const {
            username,
            subject,
            date,
            status,
        } = body;

        await TodoModel.create({
            username,
            subject,
            date,
            status,
        });

        return Response.json(
            {message:"Created New ToDo Successfully ✅"},
            {status:201}
        )

    } catch(error){
        console.log("Error =>" , error);
        return Response.json(
            {message:"Error Server Content => ", error}
        )
    }
}

