'user strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-user')
const ui = require('./ui-user')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.onSignUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.onSignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)

  api.onSignOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.onChangePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onGetEventsArray = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.onGetEventsArray(data)
    .then(ui.onGetEventsArraySuccess)
    .catch(ui.onGetEventsArrayFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetEventsArray
}
