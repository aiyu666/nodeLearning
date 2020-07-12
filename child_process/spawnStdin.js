const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
    grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
    console.error(`ps 的 stderr: ${data}`);
});

ps.on('close', (code) => {
    if (code !== 0) {
        console.log(`ps 进程退出，退出码 ${code}`);
    }
    grep.stdin.end();
});

grep.stdout.on('data', (data) => {
    console.log(data.toString());
});

grep.stderr.on('data', (data) => {
    console.error(`grep 的 stderr: ${data}`);
});

grep.on('close', (code) => {
    if (code !== 0) {
        console.log(`grep 进程退出，退出码 ${code}`);
    }
});