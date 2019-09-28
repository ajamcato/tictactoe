const store = require('../store')

const createGameSuccess = function (data) {
  console.log('it worked', data)
  // need to post message for user that we created a game successfully
  $('#message').html('Started New Game')
  $('#message').addClass('success message')
  $('#message').removeClass('error message')
  // need to store the game
  store.game = data.game
}

const updateGameSuccess = function (data) {
  console.log('update worked', data)
  // need to post message for user that we created a game successfully
  $('#message').html('Started New Game')
  $('#message').addClass('success message')
  $('#message').html('error message')
  // need to store the game
  store.game = data.game
}

const updateGameFailure = function (data) {
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  store.game = data.game
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure

}
