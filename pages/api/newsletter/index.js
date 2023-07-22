import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;

        if (email) {
            const connect = await MongoClient.connect("mongodb+srv://deniswmonteiro:Ep10806702@cluster0.cwxr3dv.mongodb.net/events");
            const db = connect.db();

            await db.collection("newsletter").insertOne({ email });
            connect.close();

            res.status(201).json({
                message: "Email registado na newsletter.",
            });
        }

        else {
            res.status(422).json({
                message: "Email inválido.",
            });
        }
    }
}

export default handler