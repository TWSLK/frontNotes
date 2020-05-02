const express = require('express');
var server = express();
server.listen(3000);

//中间件：为了拦截请求/reg
//可以拦截请求，做出响应
server.use('/reg',function(req,res,next){
	console.log('对注册进行了非空验证');
	next();
});

//注册的路由
//请求的方法:get  请求的URL:/reg
server.get('/reg',function(req,res,next){
	res.send('注册成功');
	next();
})

server.get('/login',function(req,res){
	res.send('登录成功');
})

//写入日志
server.use('/reg',function(req,res){
	res.send('写入日志');
})



