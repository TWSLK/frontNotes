//编码
var uri = "http://localhost:8080/search?kw=电脑";
console.log(encodeURI(uri));
//解码
var uri2 = "http://localhost:8080/search?kw=%E7%94%B5%E8%84%91";
console.log(encodeURI(uri2));