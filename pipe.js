var fs=require('fs');
var readerStream=fs.createReadStream('input.txt');
var writerStream=fs.createWriteStream('new.txt');
readerStream.pipe(writerStream);
console.log("program ended");
