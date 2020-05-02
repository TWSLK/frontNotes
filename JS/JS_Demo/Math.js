var arr = ['a','b','c','d','e','f','g','h','i','j'];
//随机获取0-9之间的一个数字,作为下标
//0-1*10 0-10
var index = Math.floor(Math.random()*10);
console.log(arr[index]);

//随机获取a-z之间的4个字母,组成一个新数组
var arr1 = ['a','b','c','d','e','f','g','h','i','j'];
var arr2 = [];
for(var i = 0;i<4;i++){
	var index = Math.floor(Math.random()*arr1.length);
	arr2.push(arr1[i]);
}