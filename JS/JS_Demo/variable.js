//先检查当前作用域使用var声明的变量，把声明提升到最前面，赋值还在原来的位置
console.log(a);//undefined
var a = 1;
//变为
var a;
console.log(a);
a = 1;

var b = 10;
function fn(){
	console.log(b);//undefined
	var b = 2;
}
fn();

var b = 10;
function myFn(){
	console.log(b);//10
	b = 2;
}
myFn();

var c = 5;
function fun(c){
	//相当于var c = 7；
	//形参是函数内部的变量 不能被外部访问
	c = c + 2;
}
fun(7);
console.log(c);

//函数作用域下创建函数
function fun(){
	function fun1(){
		console.log(3);
	}
	//fun1只能在当前的作用域下调用
}
fun();
//函数作用域下的函数是不能被外部调用
// fun1();

myFun();
function myFun(){
	console.log(5);
}