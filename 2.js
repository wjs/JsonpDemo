var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname,'js-2')));

app.listen(3001);
console.log('Listening on port 3001');

app.get('/', function (req, res) {
  res.sendfile('./views/2.html');
});

app.get('/somejson', function (req, res) {
  console.log(req.query.callback);
  if (req.query.callback) {
    res.send(req.query.callback + '({"id":"111","name":"alice"});');
    return;
  }
  res.json({"id":"111","name":"alice"});
});