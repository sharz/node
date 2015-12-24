var buff1=new Buffer("my name is ");
var buff2=new Buffer(" sharvari");
var buff3=Buffer.concat([buff1,buff2]);
console.log("buffer3 content is:"+buff3.toString());
