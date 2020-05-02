const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.js');
//创建web服务器
var server = express();
server.listen(3000);

//托管静态资源
server.use(express.static('public'));
//使用中间件 所有中间件只能在服务器中使用
server.use(bodyParser.urlencoded({
	extends:false;
}))
//挂载路由器
server.use('/user',userRouter);