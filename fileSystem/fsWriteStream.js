const fs = require('fs');

const outputdata = 'Robin~~~~~~~~~~~~~~~~~~~~~~';

const writerStream = fs.createWriteStream('output.txt');
writerStream.write(outputdata, 'UTF8');
writerStream.end();

writerStream.on('finish', function() {
    console.log('');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});
