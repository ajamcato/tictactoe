const config = require('../config.js')
const store = require('../store.js')

const createGame = function (event) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const getGame = function (event) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const updateGame = function (currentPlayer, index) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': currentPlayer
        },
        'over': false
      }
    }
  })
}

module.exports = {
  createGame,
  getGame,
  updateGame
}
