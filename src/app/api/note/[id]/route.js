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



export async function PUT(req , {params}){
    try{
        connectDB();

        const body = await req.json();

        const {subject , text} = body;

        const noteID = params?.id;

        if(!noteID){
            return Response.json(
                {message:"Note ID is Required"},
                {status:400}
            )
        }

        const updatedNote = await NoteModel.findOneAndUpdate(
            {
                _id:noteID,
            },
            {
                subject,
                text
            },
            {new:true}
        );

        if(!updatedNote){
            return Response.json(
                {message:"Note Not Found"},
                {status:404}
            )
        };

        return Response.json(
            {message:"Note Updated Successfully" , note:updatedNote},
            {status:200}
        )

    } catch(error){
        console.log("Error Updating Note" , error);
        return Response.json(
            {message:"Error Updating Not Server =>" ,error },
            {status:500}
        )
    }
}