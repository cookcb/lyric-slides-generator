import { ObjectId } from "mongodb";
import { connectToDatabase } from '@/lib/utilities/api/connectToDatabase';
import { Db } from 'mongodb';
import { NextResponse, NextRequest } from 'next/server'


let db: Db;
(async () => {
    console.log("GETTING DB")
    db = await connectToDatabase();
})();

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }) {
        try {
            const slug = params.slug;
            const songs = await db
                .collection("songs")
                .find({ "_id": new ObjectId(slug)})
                .toArray();
            return NextResponse.json({ songs });
        } catch (e) {
            console.error(e);
        }
};

export async function DELETE(
    req: NextRequest,
    { params }: { params: { slug: string } }) {
        try {
            const slug = params.slug;
            const song = await db
                .collection("songs")
                .deleteOne({ "_id": new ObjectId(slug)});
            return NextResponse.json({ song });
        } catch(e) {
            console.error(e);
        }
}