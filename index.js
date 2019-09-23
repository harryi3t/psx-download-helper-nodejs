var send = require('send'),
    http = require('http'),
    fs = require('fs'),
    path = require('path');

SERVER_PORT = 8081,
    // e.g. http://gs2.ww.prod.dl.playstation.net/gs2/ppkgo/prod/CUSA05528_00/23/f_947a347c1221b18179a82a9a95d360695eba4a14e837af8949574ac1949174e8/f/EP1965-CUSA05528_00-2016NEVERWINTER1-A0420-V0100_0.pkg?downloadId=00000040&du=000000000000004000e21d2a2866c395&country=in&downloadType=ob&q=a8318f20bb9240e28bc92c6539296c53e7b1ba45be89a14559d619693330d2b3&threadId=1&serverIpAddr=192.168.1.3&r=00000004
    PS_REGEX = /^http:\/\/gs2\.ww\.prod\.dl\.playstation\.net.*\/([^\?]+)\?downloadId.*/,
    FILE_INDEX = 1; // index of the file name in the regex-match array

http.createServer(onRequest).listen(SERVER_PORT);

function onRequest(client_req, client_res) {
    var proxy,
        match,
        filePath,
        readStream,
        stat;
    console.log('\npsxdh~serve: ' + client_req.url);

    // if it's a PS game URL then check our cached folder for the game file
    if (match = client_req.url.match(PS_REGEX)) {
        console.log('psxdh: Found a PS game URL. Checking the data folder for the file');
        console.log('psxdh: Range', client_req.headers.range)

        filePath = path.join(__dirname, '../storage/shared/psx/', match[FILE_INDEX]);
        fs.stat(filePath, function (err, stat) {
            if (err) {
                console.log('psxdh~warning: file not found locally' +
                    '\nPlease put the downloaded game file in the data folder without renaming.');
                return client_res.end();
            }

            console.log('psxdh: Found the game file locally. Sending it to the PS!')

            try {
                send(client_req, filePath)
                    .on('error', (err) => {
                        console.log('send~error', err);
                        client_res.statusCode = err.status || 500;
                        client_res.end(err.message);
                    })
                    .pipe(client_res);
            } catch (err) {
                console.error('psxdh~error', err);
            }
        });
    }
    else { // this part does not work well. It works well for at-least the game description link (PS first makes a call
        // get the game desc which is in json). Ideally user should be able to fully use PS network related tasks
        // while in proxy mode like nagivating the store.

        proxy = http.request(client_req.url, function (res) {
            Object.keys(res.headers).forEach(function (key) {
                client_res.setHeader(key, res.headers[key]);
            });
            res.pipe(client_res, {
                end: true
            });
        });

        client_req.pipe(proxy, {
            end: true
        });
    }
}

console.log(`
psxdh: Proxy listening on http://localhost:${SERVER_PORT}
`);
