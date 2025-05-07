import { connectDB } from "@/lib/connectDB"

export const GET = async()=>{
    const db = await connectDB();
    const createCollelction = db.collection("create")
    try {
        const users = await createCollelction.find().toArray();
        return Response.json({users})
        
    } catch (error) {
        console.log(error);
    }

}


