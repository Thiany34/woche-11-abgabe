import { MongoClient } from "mongodb";
import { MONGODB_URI } from "$env/static/private";

const uri = MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI ist nicht gesetzt");
}

const client = new MongoClient(uri);
export const db = client.db("svelteapp");
