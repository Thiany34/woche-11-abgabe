import { MongoClient } from "mongodb";
import { env } from "$env/dynamic/private";

const uri = env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI ist nicht gesetzt");
}

const client = new MongoClient(uri);
export const db = client.db("svelteapp");
