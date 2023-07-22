import fs from "fs";
import path from "path";

export function getCommentPath() {
    const filePath = path.join(process.cwd(), "data", "comments.json");

    return filePath;
}

export function extractComment(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
}

function handler(req, res) {
    const eventId = req.query.eventId;

    if (req.method === "POST") {
        const name = req.body.name;
        const email = req.body.email;
        const commentText = req.body.comment;

        if (name || email || commentText) {
            const comment = {
                id: new Date().toISOString(),
                name,
                email,
                commentText,
                eventId
            }

            const filePath = getCommentPath();
            const data = extractComment(filePath);

            data.push(comment);
            fs.writeFileSync(filePath, JSON.stringify(data));

            res.status(201).json({
                message: "Comentário adicionado com sucesso.",
                comment
            });
        }

        else {
            res.status(422).json({
                message: "Campos inválidos."
            });
        }
    }

    if (req.method === "GET") {
        const filePath = getCommentPath();
        const data = extractComment(filePath);

        res.status(201).json({ comments: data });
    }
}

export default handler