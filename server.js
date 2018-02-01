var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 3000;
app.listen(port, function (){
  console.log('Express server is up on port 3000');
})
