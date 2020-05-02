//使用递归计算斐波那契数列的第n项
function fib(n){
	//第1项和第2项的值是1
	if(n == 1 || n == 2){
		return 1;
	}else{
		//其它项的值 = 前1项的值 + 再前1项的值
		return fib(n - 1) + fib(n - 2);
	}
}

fib(7);

function fun(n){
	//初始化n1的值和n2的值
	var n1 = 1;
	var n2 = 1;
	//从第3项开始，往后移动，移动到第n项
	//移动的范围 3~n
	for(var i = 3;i <= n;i++){
		//每次n1和n2往后移动一位
		//新的n2的值为前两项相加的和
		//新的n1的值为旧的n2的值
		var c = n2;
		n2 = n1 + n2;
		n1 = c;
	}
	//当前的n就是移动后的n2
	console.log(n2);
}