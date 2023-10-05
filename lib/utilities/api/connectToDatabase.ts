import clientPromise from "@/lib/mongodb";
import { Db } from "mongodb";

/* Create and export a function that will connect to the database and modify the 
    songs collection to provide a jsonSchema for validation.

    The schema should require a title and lyrics field. Both should be strings.

    The schema should also require an id
*/

export async function connectToDatabase(): Promise<Db> {
    const client = await clientPromise;
    const db = client.db("Song-Lyrics");
    console.log("Connected to database")
    await db.command({
        collMod: "songs",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title", "lyrics"],
                properties: {
                    _id: {
                        bsonType: "objectId",
                        description: "must be an objectId and is required"
                    },
                    title: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    lyrics: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    }
                }
            }
        }
    });
    return db;
}