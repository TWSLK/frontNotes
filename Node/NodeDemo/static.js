const express = require("express");
var server = express();
server.listen(3000);

//使用express内置的中间件static
server.use(express.static('public'));