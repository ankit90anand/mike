var fs = require('fs');
var PeerServer = require('peer').PeerServer;
//var server = PeerServer({port: 9000, path: '/'});

var server = PeerServer({
    port: 9000,
    path: '/',
    ssl: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }
});
