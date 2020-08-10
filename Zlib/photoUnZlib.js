const zlib = require('zlib')
const fs = require('fs')
const gunzip = zlib.createGunzip()
const inp = fs.createReadStream('./handsome.png.gz')
const out = fs.createWriteStream('unzipHandsome.png')
inp.pipe(gunzip).pipe(out)