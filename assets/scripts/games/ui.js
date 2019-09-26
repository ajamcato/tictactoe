'use strict'

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').addClass('failure')
  $('#message').removeClass('success')
}

const onSignUpSuccess = () => {
  console.log('success')
  successMessage('Signed up Successfully!')
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
