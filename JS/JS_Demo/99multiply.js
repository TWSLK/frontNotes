//倒着打印乘法表
for(var j = 9;j >= 1;j--){
	for(var i = j,str = '';i >= 1;i--){
		str += i + '*' + j + '=' + (i*j) + ' ';
	}
	console.log(str);
}

//顺序打印
for(var j = 1;j <= 9;j++){
	for(var i = 1,str = '';i <= j;i++){
		str += i + '*' + j + '=' + (i*j) + ' ';
	}
	console.log(str);
}