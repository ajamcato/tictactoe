
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // page doesnt refresh when you click on submit button
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('success')
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
