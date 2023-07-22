import fs from "fs";
import path from "path";

export function getNewsletterPath() {
    const filePath = path.join(process.cwd(), "data", "newsletter.json");

    return filePath;
}

export function extractNewsletter(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
}

function handler(req, res) {
    if (req.method === "POST") {
        const email = req.body.email;

        if (email) {
            const newsletterRegistration = {
                id: new Date().toISOString(),
                email
            }

            const filePath = getNewsletterPath();
            const data = extractNewsletter(filePath);

            data.push(newsletterRegistration);
            fs.writeFileSync(filePath, JSON.stringify(data));

            res.status(201).json({
                message: "Email registado na newsletter.",
                newsletter: newsletterRegistration
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