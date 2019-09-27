const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// const player1 = 'X'
// const player2 = 'O'

let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

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
    // if (currentPlayer === 'X') {
    //   currentPlayer === 'O'// store.user playerX data
    // } else if (currentPlayer === 'O') {
    //   currentPlayer = 'X' // store.user playerO data
    // }
    switchPlayer()
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
  console.log('win')
}

const checkForTie = function () {
  console.log('tie')
}

module.exports = {
  onNewGame,
  boardClick,
  onClickedSquare,
  currentPlayer,
  checkForWin,
  checkForTie
}
