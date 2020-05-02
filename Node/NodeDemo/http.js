const http = require('http');

//模拟浏览器向服务器端发送请求
//get:请求方法
//参数1:请求的URL
//参数2:获取服务器端响应，通过回调函数
//res:响应对象
http.get('http://www.baidu.com',function(res){
	//获取响应的状态码
	console.log(res.statusCode);
	//获取相应的数据
	//on('data')当服务器端有数据传递的时候，会自动触发
	//使用回调函数来接受
	//buf就是接受的数据
	res.on('data',function(buf){
		console.log(buf);
	})
})

//向中国天气网接口发请求
http.get('http://www.weather.com/cn/data/sk/1011101/01.html',function(res){
	res.on('data',function(buf){
		console.log(buf.toString());
	})
})