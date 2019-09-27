const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// const player1 = 'X'
// const player2 = 'O'

let gameBoard = ['', '','','','','','','','']
let currentPlayer = 'X'

const onNewGame = function (event) {
  event.preventDefault()
  const data = event.target
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onClickedSquare = function (event) {
  event.preventDefault()
  console.log('clicked')
  $(event.target).html(currentPlayer)
}




module.exports = {
  onNewGame,
  onClickedSquare
}
