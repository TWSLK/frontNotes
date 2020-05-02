// function fn(){
// 	alert('long ago');
// 	//在函数内部调用自身
// 	fn();
// }
// fn();

//使用递归来完成1~任意数字之间所有整数的和
var sum = 0;
function fn(n){
	if(n == 1){
		return 1;
	}
	return n + fn(n-1);
}

var result = fn(5);
console.log(result);