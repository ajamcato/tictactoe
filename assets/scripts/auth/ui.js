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
  $('message').css('color', 'green')
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
  $('message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
