//nodejs默认为每个文件添加了构造函数
// (function(exports,require,module,__filename,__dirname)){
	//程序员写的代码默认就出现在函数体中
	var num = 1;
	//module指当前模块
	//module.exports 公开的对象，默认是空的
	module.exports.name = 'tom';
	
	//完整路径和模块名称
	console.log(__filename);
	//完整路径
	console.log(__dirname);
	
	//目录模块 以路径开头的引用
	//先检查02目录下是否含有文件package.json文件
	//如果有，会引入main属性对应的模块名称
	//如果没有，会引入index.js
	require('./02');
	
	//不以路径开头的模块 自动去node_module中找
	require('test');
// })