import connectDB from "@/config/db";
import NoteModel from '@/models/Note';

export async function DELETE (req , {params}){
    try{
        connectDB();

        const noteID = params?.id;
        if(!noteID){
            return Response.json(
                {message:"Todo ID is Required"},
                {status:400}
            )
        };

        await NoteModel.findOneAndDelete ({
            _id:noteID
        });

        return Response.json(
            {message:"Todo Removed Successfully" }, 
            {status:200}
        )

    } catch(error){
        console.log("error =>" ,error);
        return Response.json(
            {message:"Error Removed Note server =>" , error},
            {status:500}
        )
    }
}