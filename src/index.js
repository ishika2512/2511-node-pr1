// // create server by using express
// const express=require("express");
// const fs=require("fs");
// const app=express();

// app.get('/',function(req,res){
//     fs.readFile('indexx.html',function(err,data){
//         res.writeHead(200,{'content-type':'test.html'});
//         res.write(data);
//         res.end();
//     });
// });
// app.listen(4040);

// create server by using http
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    fs.readFile('indexx.html',function(err,data){
        res.writeHead(200,{'content-type':'test.html'});
        res.write(data);
        return res.end();
    })
}).listen(4040);