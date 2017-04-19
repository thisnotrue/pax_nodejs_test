{
    let http = require('http');
    http.get('http://www.paxlabs.net/pax/new/', (res) => {
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];
        let error;
        if (statusCode !== 200) {
            error = new Error(`Request Failed.\n` +
                `Status Code: ${statusCode}`);
        }
        else if (!/^application\/json/.test(contentType)) {
            error = new Error(`Invalid content-type.\n` +
                `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.log(error.message);
            // consume response data to free up memory
            res.resume();
            return;
        }
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {
                let parsedData = JSON.parse(rawData);
                console.log(parsedData);
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
    let hello = "bla bla";
    console.log(`suka ${hello}`);
    if (process.argv[2] == undefined) {
        console.log("command is not defined");
    }
    else {
        console.log("command: " + process.argv[2]);
    }
}
//# sourceMappingURL=test.js.map