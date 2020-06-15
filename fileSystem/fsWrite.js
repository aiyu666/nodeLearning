const fs = require('fs')

fs.writeFile('./writeme.txt', '鼠年全馬 gogogo', (err) => {
    if (err) return console.error(err);
    fs.readFile('writeme.txt', (err, data) => {
        if (err) return console.error(err);
        console.log(data.toString())
    });
});
