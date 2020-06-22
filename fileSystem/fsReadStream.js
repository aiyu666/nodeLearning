const fs = require('fs');

let result = '';

const reader = fs.createReadStream('readme.txt');

reader.setEncoding('UTF8');

reader.on('data', function(data) {
    console.log(data);
    result += data;
});

reader.on('end', function() {
    console.log(result);
});