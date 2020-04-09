const express = require('express')
const server = express()
const app = require('./app.js')
const port = 3333

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


server.get('/init', function (req, res) {
  var val = app.newGame();
  res.json(val);
})

server.get('/', (req, res) => res.send('Hello World!'))

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
