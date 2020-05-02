const http = require("http");
const express = require("express");
const routerData = require("./index_data");
const routerLogin = require("./login");
const routerRegister = require("./register");

let app = express();
let server = http.createServer(app);
server.listen(3000);

console.log("服务器启动完成");

app.use("/index_data",routerData);
app.use("/login",routerLogin);
app.use("/register",routerRegister);
