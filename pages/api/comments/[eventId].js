import { MongoClient } from "mongodb";

async function handler(req, res) {
    const connect = await MongoClient.connect("mongodb+srv://deniswmonteiro:woftam-corMat-1pipna@cluster0.cwxr3dv.mongodb.net/events");
    const eventId = req.query.eventId;

    if (req.method === "POST") {
        const name = req.body.name;
        const email = req.body.email;
        const commentText = req.body.comment;

        if (name || email || commentText) {
            const comment = {
                name,
                email,
                commentText,
                eventId
            }

            const db = connect.db();
            await db.collection("comments").insertOne(comment);

            res.status(201).json({
                message: "Comentário adicionado com sucesso.",
                comment: comment
            });
        }

        else {
            res.status(422).json({
                message: "Campos inválidos."
            });
        }
    }

    if (req.method === "GET") {
        const db = connect.db();
        const comments = await db.collection("comments")
            .find({ eventId: eventId })
            .sort({ _id: 1 })
            .toArray();

        res.status(201).json({ comments: comments });
    }

    connect.close();
}

export default handler