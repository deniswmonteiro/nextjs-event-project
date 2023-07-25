import { dbConnect, getAllDocuments, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
    let connect;
    const eventId = req.query.eventId;

    if (req.method === "POST") {
        const name = req.body.name;
        const email = req.body.email;
        const commentText = req.body.comment;
        const date = new Date().toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        if (name || email || commentText) {
            const reqBody = {
                name,
                email,
                commentText,
                date,
                eventId
            }

            try {
                connect = await dbConnect();
                await insertDocument(connect, "comments", reqBody);

                res.status(201).json({
                    message: "Comentário adicionado com sucesso.",
                    comment: reqBody
                });
            }
        
            catch (error) {
                res.status(500).json({
                    message: "Erro de conexão com o banco de dados. Tente novamente mais tarde."
                });
            }

            finally {
                connect.close();
            }
        }

        else {
            res.status(422).json({
                message: "Campos inválidos."
            });
        }
    }

    if (req.method === "GET") {
        try {
            connect = await dbConnect();
            
            const comments = await getAllDocuments(connect, "comments", {_id: -1}, {eventId: eventId});

            res.status(201).json({ comments: comments });
        }
    
        catch (error) {
            res.status(500).json({
                message: "Erro de conexão com o banco de dados. Tente novamente mais tarde."
            });
        }

        finally {
            connect.close();
        }
    }
}

export default handler