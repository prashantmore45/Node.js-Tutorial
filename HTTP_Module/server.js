const http = require('http');

// web server

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1 style="color: blue; font-family: Arial; text-align: center;">
                I am Prashant More Web Developer
            </h1>`);
    }  else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the About Page. Here you learn more about me!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});