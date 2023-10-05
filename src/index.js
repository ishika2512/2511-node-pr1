const express = require("express");
const fs = require("fs");
const http = require("http");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnection");
const bodyParser = require("body-parser");
const routes = require("./routes");

// database connection
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(`./public`));

// route namespace
app.use("/v1", routes);

// server create
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 );
});