const fs = require('fs');

const file = fs.readFileSync('./medium.txt').toString();
console.log(file);