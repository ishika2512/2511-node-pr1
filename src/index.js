const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const config = require("./config/config");

const app=express();

app.use("/v1", routes);

connectDB();

// // create server by using express
// const fs=require("fs");

// app.get('/',function(req,res){
//     fs.readFile('indexx.html',function(err,data){
//         res.writeHead(200,{'content-type':'test.html'});
//         res.write(data);
//         res.end();
//     });
// });
// app.listen(4040);

// create server by using http
var fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile('indexx.html', function (err, data) {
        res.writeHead(200, { 'content-type': 'test.html' });
        res.write(data);
        return res.end();
    })
}).listen(4040);