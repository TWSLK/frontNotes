const express = require('express');
//引入自定义模块
const userRouter = require('user.js');

//使用express创建web服务器
var server = express();
server.listen(3000);

//把用户路由器模块挂载到/user下
//参数1:要挂载的URL
//参数2:要挂载的路由器
server.use('/user',userRouter);