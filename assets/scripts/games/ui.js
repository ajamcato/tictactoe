const store = require('../store')

const createGameSuccess = function (data) {
  // need to post message for user that we created a game successfully
  $('#message').html('Started New Game')
  $('#message').addClass('success message')
  $('#message').removeClass('error message')
  // need to store the game
  store.game = data.game
}

const onUpdateGameSuccess = function (data) {
  // need to post message for user that we created a game successfully
  // $('#message').html('Successful move')
  $('#message').addClass('success message')
  // need to store the game
  store.game = data.game
}

const onUpdateGameFailure = function (data) {
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  store.game = data.game
}

const onGameRecordSuccess = function (data) {
  $('.game-history').html(data.games.length)
  console.log(data)
  // store.game = data.game
}

const onGameRecordFailure = function (data) {
  $('#get-history').html('Could not retrieve total games. Please try again')
  // store.game = data.game
}

module.exports = {
  createGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGameRecordSuccess,
  onGameRecordFailure

}
