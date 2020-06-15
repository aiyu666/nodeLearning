const fs = require('fs')

fs.readFile('readme.txt', (err, data) => {
    console.log(data)
});