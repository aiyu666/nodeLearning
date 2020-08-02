const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const inp = fs.createReadStream('handsome.png');
const out = fs.createWriteStream('handsome.png.gz');

inp.pipe(gzip).pipe(out);
