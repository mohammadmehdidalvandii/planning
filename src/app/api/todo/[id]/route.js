import connectDB from "@/config/db";
import TodoModel from '@/models/Todo';

export async function DELETE(req , {params}) {
    try {
        connectDB();
        const todoID = params?.id;

        if (!todoID) {
            return Response.json(
                { message: "Todo ID is required" },
                { status: 400 }
            )}

        await TodoModel.findOneAndDelete({
            _id:todoID
        });

        return Response.json(
            {message: "Todo Removed Successfully"},
            {status:200}
        )

    } catch(error){
        console.log("error =>" , error)
        return Response.json(
            {message:"Error Delete Todo Server =>" , error},
            {status:500}
        )
    }
    
}


export async function PUT (req , {params}){
    try{
        connectDB();

        const todoID = params?.id;

        if(!todoID){
            return Response.json(
                {message:"Todo ID is Required"},
                {status:400}
            )
        };

        const updatedTodo = await TodoModel.findOneAndUpdate(
            {_id:todoID},
            {complete:true},
            {new: true}
        );

        if(!updatedTodo){
            return Response.json(
                {message:"Todo not Found"},
                {status:404}
            )
        }

        return Response.json(
            {message:"Todo Updated Successfully" , todo:updatedTodo},
            {status:200}
        )

    } catch(error){
        console.log("error => " , error)
        return Response.json(
            {message:"Error Updating Todo  server =>" , error},
            {status:500}
        )
    }
}