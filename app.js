var express = require('express');
var app = express();

// set the views directory
app.set('views', './views')

// set the template engine to use jade
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('story');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
