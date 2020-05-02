const express = require('express');
//引入body-parser模块
const bodyParser = require('body-parser');
var server = express();

server.listen(3000);

//把静态资源托管到public
server.use(express.static('public'));

//使用中间件body-parser可以将post请求的数据直接格式化为对象
server.use(bodyParser.urlencoded({
	extended:false  //不适用第三方的qs模块 而是使用querystring模块将查询的字符串格式化为对象
}));

//根据表单的请求 写对应的路由
server.post('/myLogin',function(req,res){
	//使用req.body获取post请求的数据
	console.log(req.body);
	res.send('登录成功');
})