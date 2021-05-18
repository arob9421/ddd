'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.write('hello world', 'utf-8');
  res.end();
});

var port = process.env.PORT || 5000;

var server = app.listen(port,  "127.0.0.1", () => {
  var host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port);
});
