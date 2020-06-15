const fs = require('fs')
const Mode = require('stat-mode');
fs.stat('./readme.txt', function(err, stats) {
    if (err) return console.error(err)
    const mode = new Mode(stats)
    console.log(mode.toString())
    console.log(`Group execute ${mode.group.execute}`)
    console.log(`Others write ${mode.others.write}`)
    console.log(`Owner read ${mode.owner.read}`)
})