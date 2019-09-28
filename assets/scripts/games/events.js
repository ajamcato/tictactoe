const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// const player1 = 'X'
// const player2 = 'O'

let game = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

// to switch players
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
}

const boardClick = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    checkForWin()
    checkForTie()
    api.updateGame(event)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
    // if (currentPlayer === 'X') {
    //   currentPlayer === 'O'// store.user playerX data
    // } else if (currentPlayer === 'O') {
    //   currentPlayer = 'X' // store.user playerO data
    // }
    switchPlayer()
  } else {
    console.log('theres an x here already')
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = event.target
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onClickedSquare = function (event) {
  event.preventDefault()
  // console.log('clicked')
  $(event.target).html(currentPlayer)
}

const checkForWin = function () {
  if (findWinner === 'true') {
    $('#message').text('Winner')
 }
// if winner or board is full, do not allow anymore clicks.

const checkIfBoardFull = function () {
  console.log('win')
}

const checkForTie = function () {
  console.log('tie')
}

// to check winning combinations

 const findWinner = function () {
  if (game[0] === 'x' && game[1] === 'x' && game[2] === 'x') {
     return 'Player X Won!'
     // console.log('player x won')
  }
}

module.exports = {
  onNewGame,
  boardClick,
  onClickedSquare,
  currentPlayer,
  checkForWin,
  checkForTie,
  findWinner
}
