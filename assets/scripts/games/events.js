const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let currentPlayer = 'X'
let winner = false
let message

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    $('#game-notification').text('Player Os Turn')
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
    $('#game-notification').text('Player Xs Turn')
  }
}

let newGameStarted = false
const boardClick = function(event) {
  if (!newGameStarted) {
    return
  }
  // if winner or board is full, do not allow anymore clicks.
  if ($(event.target).text() === '' && winner === false) {
    $(event.target).text(currentPlayer)

    // first update API with the currentplayer and the spot they chose
    api.updateGame(currentPlayer, event.target.id, gameOver)
      // if updating game is successful
      .then((response) => {
        // switch player
        switchPlayer()
        // save the game board from the API to store
        ui.onUpdateGameSuccess(response)
        // check for the winner
        findWinner()
      })
      .catch(ui.onUpdateGameFailure)
    store.game.cells[event.target.id] = currentPlayer
    console.log(store)
    console.log(store.game.cells)
  } else {
    console.log('theres an character here already')
  }
}

const onNewGame = function(event) {
  event.preventDefault()
  newGameStarted = true
  winner = false
  currentPlayer = 'X'
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.onNewGameFailure)
  $('.square').html('')
  console.log(store)
  $('#game-notification').html('')
}

// to get game History
const onGameRecords = function(event) {
  event.preventDefault()
  api.getGameTotal()
    .then(ui.onGameRecordSuccess)
    .catch(ui.onGameRecordFailure)
}

// to check winning combinations
const findWinner = function() {
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
    (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
    (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') ||
    (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X')) {
    winner = true
    message = 'Player X Wins!'
  } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
    (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
    (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
    (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
    (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') ||
    (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
    (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
    (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O')) {
    winner = true
    message = 'Player O Wins!'
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' &&
    store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' &&
    store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    winner = true
    message = 'Game Tied'
  }
  if (winner === true) {
    $('#message').text(message)
    $('#game-notification').html('Game Over')
  }
}

// If game is over
const gameOver = function () {
  if (winner) {
    store.game.over = true
  } else {
    store.game.over = false
  }
  return gameOver
}

module.exports = {
  onNewGame,
  boardClick,
  currentPlayer,
  findWinner,
  onGameRecords
}
