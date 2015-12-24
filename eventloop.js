var fs=require('fs');
fs.watch('edit.txt',function(event,filename)
{
console.log('Event:' +event+ ',for file '+filename);
});
console.log("now watching changes in edit.txt ");
