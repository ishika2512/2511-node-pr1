const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes");
const config = require("./config/config");

const app=express();

app.use("/v1", routes);

connectDB();

var fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile('indexx.html', function (err, data) {
        res.writeHead(200, { 'content-type': 'test.html' });
        res.write(data);
        return res.end();
    })
}).listen(7070);