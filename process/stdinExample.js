process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    const input = process.stdin.read();
    if (input !== null) {
        console.log(`我監聽到東西啦 -> ${input}`)
    }
});
