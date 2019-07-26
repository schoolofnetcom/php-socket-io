const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
    const data = req.body;
    
    io.emit('show notify', data);
    res.send('<h1>ok</h1>');
});

app.get('/', function (req, res) {
    res.send('<h1>Javascript</h1>');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});