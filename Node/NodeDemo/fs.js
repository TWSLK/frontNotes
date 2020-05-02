//引入fs模块
const fs = require('fs');
//查看文件的状态
//异步
fs.stat('app.js',function(err,stats){
	//回调函数的作用：用于查看文件状态的结果
	//err:可能产生的错误
	//stats:具体文件的状态
	if(err) throw err;//如果有错误就抛出 会阻止后面的运行
	console.log(stats);
	//查看是否为目录形式
	console.log(stats.isDirectory());
	//查看是否为文件形式
	console.log(stats.isFile());
});

//同步
var stats = fs.statSync('app.js');
console.log(stats);

//创建目录
fs.mkdir('myDir',function(err){
	if(err) throw err;
	console.log('目录创建成功');
})
fs.mkdirSync('myDir');

//删除目录
fs.rm('myDir',function(err){
	if(err) throw err;
	 console.log('移除成功');
})
fs.rmSync('myDir');

//读取目录中的文件
fs.readdir('02',function(err,files){
	if(err) throw err;
	console.log(files);
})

//写入文件
fs.writeFile('num.txt',123,function(err){
	if(err) throw err;
	console.log('写入成功')
});

//练习
//创建目录
var fs.mkdirSync('myDir');
//在myDir下创建data.txt
var student = [
	{
		id:1,
		name:'Tom',
		age:18
	},
	{
		id:2,
		name:'Kate',
		age:20
	},
	{
		id:3,
		name:'King',
		age:19
	}
];
//遍历数组,得到每一个对象
for(var i = 0;i<student.length;i++){
	//student[i]代表每一个对象
	var str = student[i].id +' '+ student[i].name +' '+ student[i].age;
	fs.appendFileSync('myDir/data.txt',)
}

//判断文件是否存在
fs.existsSync('myDir');

//文件计数器
if(!fs.existsSync('num.txt')){
	fs.writeFileSync('num.txt',0);
}
//读取文件中的内容
var num = fs.readFileSync('num.txt');
//读取的值加1
num++;
console.log(num);

//把num的值清空写入
fs.writeFileSync('num.txt',num);