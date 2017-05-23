const db = require('../rthinkdb/server');
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
const _db = new db(io);
app.listen(8089);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    //_db.getLastData();
});