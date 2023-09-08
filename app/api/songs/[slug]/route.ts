import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }) {
   try {
        const slug = params.slug;
        console.log(slug)
       const client = await clientPromise;
       const db = client.db("Song-Lyrics");

       const songs = await db
           .collection("songs")
           .find({ "_id": new ObjectId(slug)})
           .toArray();
       return NextResponse.json({ songs });
   } catch (e) {
       console.error(e);
   }
};