const { fork } = require('child_process')
const path = require('path')
let child = fork(path.join(__dirname, './fork1.js'))
child.on('message', (data) => {
    console.log(`父行程接收到訊息 -> ${data}`)
})
child.send('hello world')
child.on('error', (err) => {
    console.error(err)
})