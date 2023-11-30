const express = require("express");
const fs = require("fs");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconections");
const config = require("./config/config");
const routes = require("./routes");
require("./helpers/crons");

// database connection
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//  enable cors
app.use(cors());
app.options("*", cors());

// namespace
app.use("/v1", routes);

// server
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port} `);
});