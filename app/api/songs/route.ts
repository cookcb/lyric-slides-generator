import { connectToDatabase } from '@/lib/utilities/api/connectToDatabase';
import { Db } from 'mongodb';
import { NextResponse, NextRequest } from 'next/server'

let db: Db;
(async () => {
    db = await connectToDatabase();
})();

export async function GET(
    req: NextRequest) {
   try {
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

export async function POST(
    req: NextRequest) {
        try {
            const formData = await req.formData();
            const title = formData.get("title");
            const lyrics = formData.get("lyrics");
            const song = await db
                .collection("songs")
                .insertOne({ title, lyrics });
            return NextResponse.json({ song });
        } catch(e) {
            console.error(e);
        }
}