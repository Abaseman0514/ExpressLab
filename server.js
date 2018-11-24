"use strict";

const express = require("express");
const items = require("./routes");
const app = express();
const port = 8888;
// const http = require("http");
// // http.createServer((request, response) => {
// // response.writeHead(200, { "Content-type": "text/plain" });
// // response.write("Hello, World");
// // response.end();
// // }).listen(8888);

app.use(express.static("./public"));
app.use(express.json());
app.use("/", items);


app.listen(port, () => console.log(`server up and running on localhost: ${port}`));