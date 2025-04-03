import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const routes = {
    "/": "API com Node e Express.js",
    "/posts": "Rota de postagens",
    "/autores": "Rota de autores",
}

app.listen(PORT, () => {
    console.log("Servidor na escuta!");
});


// mongodb+srv://fernandall:<paulochato123>@cluster0.jdwqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//const server = http.createServer((req, res) => {
//    res.writeHead(200, { "Content-Type": "text/plain" });
//    res.end(routes[req.url]);
//});

//server.listen(PORT, () => {
//    console.log("Servidor na escuta!");
//});



