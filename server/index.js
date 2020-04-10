const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const db = require('./db')
const port = 3333

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

server.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

server.get('/games', db.getGames)
server.get('/games/:identity', db.getGameByIdentity)
server.post('/games', db.createGame)
server.put('/games/:identity', db.updateGame)


server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
