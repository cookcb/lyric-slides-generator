import clientPromise from "../../../lib/mongodb";
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
    req: NextRequest) {
   try {
       const client = await clientPromise;
       const db = client.db("Song-Lyrics");

       const songs = await db
           .collection("songs")
           .find({})
           .limit(10)
           .toArray();
       return NextResponse.json({ songs });
   } catch (e) {
       console.error(e);
   }
};