import { MongoClient } from "mongodb";
import { MONGO_URI, DB_NAME } from "./env.js";

const client = new MongoClient(MONGO_URI);
let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db(DB_NAME);
    console.log("MongoDB connected");
  }
  return db;
}
