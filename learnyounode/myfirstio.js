var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var newLines = str.split('\n').length - 1;
console.log(newLines);
