"use strict";

var express = require('express');

var cors = require('cors');

var app = express();
var PORT = 5000;
app.use(cors());
app.use(express.json());
app.get('/api/hello', function (req, res) {
  res.send({
    message: "Hello From Express"
  });
});
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});
app.post('/api/world', function (req, res) {
  var input = req.body.input;
  console.log("Received from client:", input);
  res.send({
    message: "I received your POST request. This is what you sent me: ".concat(input)
  });
});