const { execFile } = require('child_process');
execFile('node', ['hello.js'], (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
