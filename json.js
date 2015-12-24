var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
var len=buf.write("my name is sharvari");
console.log("json data is:"+json);
console.log("length is:"+len);
