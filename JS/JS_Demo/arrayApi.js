var arr = ['Tom','Jam','asd','ghfg','qwwr','tyuu','erwgg'];
var arr1 = ['Cat','Dog'];
//将数组转为字符串 默认逗号分隔
console.log(arr.toString());
//按照指定的字符将数组转为字符串 默认逗号分隔
console.log(arr.join('-'));
//拼接多个数组
console.log(arr.concat(arr1));
//截取数组中的元素 前一个数字开始，后一个数字-1是截取的位置  数字是负号是倒数
console.log(arr.slice(2,4));
//删除数组中的元素
console.log(arr.splice(3));//3~最后
console.log(arr.splice(3,2))//第一个是开始位置 第二个是删除个数
console.log(arr.splice(-3))//倒数
console.log(arr.splice(1,2,'jfkd'));//删除之后 补充一个 

//比较大小
for(var i = 0;i<arr.length;i++){
	for(var j = 0;j<arr.length - i;j++){
		if(arr[j]>arr[j+1]){
			var tmp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
	}
}
//翻转数组
console.log(arr.reverse());
//数组排序:是按照首个字符的Unicode码排序
console.log(arr.sort());
sort(function(a,b){
	return a - b;
})

//在末尾添加元素
console.log(arr.push());
//在末尾删除
console.log(arr.pop());
//在开头添加元素
console.log(arr.unshift());
//在开头删除元素
console.log(arr.shift());