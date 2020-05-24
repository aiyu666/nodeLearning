const getW3hexschool = require('./getW3hexschool');
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    let input;
    while ((input = process.stdin.read()) !== null) {
        const command = input.trim();
        if (command.includes('get') && command.split(' ').length === 2) {
            const keyID = parseInt(command.split(' ')[1]);
            getW3hexschool(keyID).then(val => {
                const targetVal = (JSON.parse(val.body)).filter((item) => {
                    return item.keyID === keyID;
                });
                console.log('-------------------------------------')
                process.stdout.write(`name: ${targetVal[0].name}\n`);
                process.stdout.write(`blogUrl: ${targetVal[0].blogUrl}\n`);
                process.stdout.write(`updateTime: ${targetVal[0].updateTime}\n`);
                process.stdout.write('blogList:\n');
                targetVal[0].blogList.forEach(item => {
                    process.stdout.write(`Title: ${item.title}\n`);
                    process.stdout.write(`Url: ${item.url}\n`);
                });
                console.log('-------------------------------------');
            });
        };
        if (command === 'exit') process.exit();
    }
});