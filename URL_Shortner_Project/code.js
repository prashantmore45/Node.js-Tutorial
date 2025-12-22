import { readFile } from "fs/promises";
import { createServer } from "http";
import crypto from "crypto";
import path  from "path";
import { connectDB } from "./config/db-client.js";
import { PORT } from "./config/env.js";


const serverFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
};



const server = createServer( async (req, res) => {

    const db = await connectDB();
    const links = db.collection("links");

    console.log(req.url);

    if (req.method === "GET") {
        if (req.url === "/") {
            return serverFile(res, path.join("public", "index.html"), "text/html");
        } else if (req.url === "/style.css") {
            return serverFile(res, path.join("public", "style.css"), "text/css");
        } else if (req.url === "/links") {
            const allLinks = await links.find().toArray();
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(allLinks));
        } else {
            const shortCode = req.url.slice(1);
            const link = await links.findOne({ shortCode });

            if (link) {

                await links.updateOne( { shortCode }, { $inc: { clicks: 1 } } );
                res.writeHead(302, { Location: link.url });
                return res.end();
            }

            res.writeHead(404, { "Content-Type": "text/plain "});
            return res.end("Shortened URL is not found");

        }
    }
    
    if (req.method === 'POST' && req.url === '/shorten') {

        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on('end', async () => {
            console.log(body);
            const { url, shortCode } = JSON.parse(body);

            if (!url) {
                res.writeHead(400, {"Content-Type": "text/plain"});
                return res.end("URL is required");
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

            const exists = await links.findOne({ shortCode: finalShortCode });

            if (exists) {
                res.writeHead(400, {"Content-Type": "text/plain"});
                return res.end("Short code already exists. Please choose another.");
            }

            await links.insertOne({ shortCode: finalShortCode, url, clicks: 0, createdAt: new Date() });

             res.writeHead(200, {"Content-Type": "application/json"});
             res.end(JSON.stringify({ success: true, shortCode: finalShortCode, shortUrl: `http://localhost:${PORT}/${finalShortCode}`}));
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});