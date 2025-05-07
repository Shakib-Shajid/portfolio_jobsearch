import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {

    const newCreate = await request.json();
    
    try {
        const db = await connectDB();
        const createCollelction = db.collection('create');
        const exist = await createCollelction.findOne({ email: newCreate.email })
        if (exist) {
            return Response.json({ message: "user exist" }, { status: 304 })
        }
        const resp = await createCollelction.insertOne(newCreate);
        return Response.json({ message: "user created" }, { status: 200 })


    } catch (error) {
        console.log(error);
        return Response.json({ message: "Something went wrong", error }, { status: 500 })


    }
}