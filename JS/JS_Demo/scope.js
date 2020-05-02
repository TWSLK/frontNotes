var a = 1;
function fn(){
	//函数作用域
	var b = 2;
	//函数内部访问a
	console.log(a);//a为全局作用域下的变量，可以在任意合法位置访问
	//函数内部访问b
	console.log(b);
}
console.log(a);
//函数内使用var声明的变量不能被外部访问
// console.log(b);
fn();

var c = 3;
function fun(){
	//在函数内部修改全局变量c
	c = 30;
}
//可以修改
fun();
console.log(c);

function myFun(){
	//不使用var声明变成了全局作用域下的变量
	d = 4;
}
//调用函数，执行函数体代码
myFun();
console.log(d);