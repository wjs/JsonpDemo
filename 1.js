var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname,'js-1')));

app.listen(3000);
console.log('Listening on port 3000');

app.get('/', function (req, res) {
  res.sendfile('./views/1.html');
});