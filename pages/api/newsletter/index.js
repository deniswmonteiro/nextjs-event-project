import { dbConnect, insertDocument } from "../../helpers/db-util";

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
                await insertDocument(connect, "newsletter", reqBody);

                res.status(201).json({
                    message: "Email registrado com sucesso.",
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
                message: "Preencha o campo corretamente.",
            });
        }
    }
}

export default handler