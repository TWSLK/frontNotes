function fn(a){
	console.log(a);
}

fn(1);//a = 1
//回调函数
function fun(b){
	//实参是匿名函数，赋值给形参b
	//就相当于使用匿名函数创建了一个函数，函数名就是b
	//如果要想执行传递的匿名函数中的代码，必须调用函数b
	var res = b();
	console.log(res);
}
fun(function (){});//b=function(){}