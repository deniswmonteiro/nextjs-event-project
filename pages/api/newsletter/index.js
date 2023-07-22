import { MongoClient } from "mongodb";

async function dbConnect() {
    const connect = await MongoClient.connect("mongodb+srv://deniswmonteiro:woftam-corMat-1pipna@cluster0.cwxr3dv.mongodb.net/events");

    return connect;
}

async function insertDocument(connect, body) {
    const db = connect.db();

    await db.collection("newsletter").insertOne(body);
}


async function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;
        const reqBody = {
            email
        }

        if (email) {
            let connect;

            try {
                connect = await dbConnect();
                await insertDocument(connect, reqBody);
            }

            catch (error) {
                res.status(500).json({
                    message: "Erro de conexão com o banco de dados. Tente novamente mais tarde."
                });
            }

            finally {
                connect.close();
            }


            res.status(201).json({
                message: "Email registrado com sucesso.",
            });
        }

        else {
            res.status(422).json({
                message: "Preencha o campo corretamente.",
            });
        }
    }
}

export default handler