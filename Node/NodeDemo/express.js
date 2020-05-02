//引入第三方express模块
const express = require('express');
//引入查询字符串模块
const querystring = require('querystring');
//创建web服务器
var server = express();
//分配端口,监听8080
server.listen(8080);

//路由
//请求的方法:get  url:/list
server.get('/list',function(req,res){
	console.log('接收');
	//获取查询字符串数据--将URL中查询字符串转为对象
	console.log(req.query);
	//res对象
	//响应内容并发送
	res.send('111');
	//响应文件并发送
	res.sendFile(__dirname+'/1.html');
	//响应的重定向
	res.redirect('http://www.tmooc.cn');
})

server.post('/list2',function(req,res){
	//如果有数据传递就触发，使用回调函数接收
	req.on('data',function(buf){
		//需要使用查询字符串模块转为对象
		// console.log(buf.toString());
		var obj = querystring(buf.toString());
		console.log(obj);
	})
	res.send('登录成功！');
})

//使用路由传递数据
server.get('/detail/:lid',function(req,res){
	//接收路由传递的数据
	console.log(req.params);
	res.send('详情');
})

//引入express，使用下边的路由器功能
//创建空的路由器对象
var router = express.Router();
//往空的路由器中添加模块下的所有路由
//用户列表路由
//请求方法：get  请求的URL：/list
router.get('/list',function(req.res){
	res.send('这是用户列表');
})

//把路由器对象导出
module.exports = router;
