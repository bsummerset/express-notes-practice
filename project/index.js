const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!!!")
});

app.get("/teams", (req,res) => {
    res.send("Welcome to the NFL teams page")
});

app.get("/teams/:teamName", (req,res) => {
    const teamName = req.params.teamName;
    res.send(`
        <h1>Welcome to the ${teamName}'s Fan Page!!</h1>
        <a href="/teams">Back</a>
    `);
});

server.listen(4500, 'localhost', () => {
    console.log("Running on port http://localhost:4500")
});