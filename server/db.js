const conn = require('./conn.js')
const pool = conn.pool;
const app = require('./app.js')

const getGames = (request, response) => {
  pool.query('SELECT * FROM games ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGameByIdentity = (request, response) => {
  const identity = request.params.identity

  pool.query('SELECT * FROM games WHERE identity = $1', [identity], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createGame = (request, response) => {
  const data = app.newGame();
  let identity = data.identity;
  // Verify identity is a new unique value

  pool.query('INSERT INTO games (identity, data) VALUES ($1, $2)', [identity, data], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Game added with identity: ${identity}`)
  })
}

const updateGame = (request, response) => {
  const identity = parseInt(request.params.identity)
  const { data } = request.body

  pool.query(
    'UPDATE games SET data = $1 WHERE identity = $2',
    [name, identity],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Game modified with identity: ${identity}`)
    }
  )
}

module.exports = {
  getGames,
  getGameByIdentity,
  createGame,
  updateGame,
}
