var fs=require('fs');
console.log('writing data');
fs.writeFile('input.txt','this is a nodejs program........',function(err)
{
if(err)
{
return console.error(err);
}
console.log("Data written succesfully");
console.log("let's read newly written data");
fs.readFile('input.txt',function(err,data){
if(err)
{
  return console.error(err);
}
console.log("Asynchonous read:"+data.toString());

});
});
