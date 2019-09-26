'use strict'
const config = require('../config')
// require `store` so we have access to our `token`
// so the API knows who we anywhere

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

module.exports = {
  signUp
}
