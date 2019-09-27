const config = require('../config.js')
const store = require('../store.js')

const createGame = function (event) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      id: '',
      cell: ['','','','','','','','',''],
      over: '',
      user: store.user.token
    }
  })
}

const getGame = function (event) {
  return $.ajax ({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token' + store.user.token
    },
    data: {
      games: [
        {
          id: 1,
          cells: ["o","x","o","x","o","x","o","x","o"],
          over: true,
          player_x: {
            id: 1
          }
        }
      ]
    }
  })
}

const updateGame = function (event) {
  return $.ajax ({
    method: 'PATCH',
    url: config.apiUrl + '/games'/ + store.game.id,
    headers: {
      Authorization: 'Token token' + store.user.token
    },

  })
}
