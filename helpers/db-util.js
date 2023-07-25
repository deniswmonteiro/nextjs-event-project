import { MongoClient } from "mongodb";

export async function dbConnect() {
    const connect = await MongoClient.connect("mongodb+srv://deniswmonteiro:woftam-corMat-1pipna@cluster0.cwxr3dv.mongodb.net/events");

    return connect;
}

export async function insertDocument(connect, collection, body) {
    const db = connect.db();
    const result = await db.collection(collection).insertOne(body);

    return result;
}

export async function getAllDocuments(connect, collection, sort, filter = {}) {
    const db = connect.db();
    const documents = await db.collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();

    return documents;
}