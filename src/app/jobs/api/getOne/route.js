
import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(requst, {params})=>{
    const db = await connectDB();
    const getUser = db.collection('create');
    const { id } = await params;

    try {

        const getInfo = await getUser.findOne({_id: new ObjectId(id)})
        return NextResponse.json(getInfo);
        } catch (error) {
          return NextResponse.json({ message: "Something Went Wrong" });
        }
}






export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("create");
    const { id } = await params;
    const updateDoc = await request.json();
    try {
      const resp = await bookingsCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            ...updateDoc
          },
        },
        {
          upsert : true
        }
      );
      return NextResponse.json({ message: "updated the booking", response: resp });
    } catch (error) {
      return NextResponse.json({ message: "Something Went Wrong" });
    }
  };

