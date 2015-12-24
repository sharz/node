var buff1=new Buffer("sharvari");
var buff2=new Buffer("sharvarin");
var result=buff1.compare(buff2);
if(result < 0)
{
console.log(buff1 +" comes before "+ buff2);
}
else if(result == 0)
{
console.log(buff1 +" is as same "+ buff2);
}
else {
console.log(buff1 +" comes after "+ buff2);
}
