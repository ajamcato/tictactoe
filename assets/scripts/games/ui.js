const store = require('../store')

const createGameSuccess = function (data) {
  console.log('it worked', data)
  // need to post message for user that we created a game successfully
  // need to store the game
  store.game = data.game
}

const updateGameSuccess = function (data) {
  console.log('update worked', data)
  // need to post message for user that we created a game successfully
  // need to store the game
  store.game = data.game
}



module.exports = {
  createGameSuccess
}
