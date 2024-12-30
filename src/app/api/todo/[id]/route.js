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