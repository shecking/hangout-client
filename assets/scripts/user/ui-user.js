'use strict'
const store = require('./../store')

const onSignUpSuccess = function (data) {
  $('#user-messages').html('Sign up worked')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (data) {
  $('#user-messages').html('Sign up failed')
}

const onSignInSuccess = function (data) {
  store.user = data.user

  $('#sign-out').show()
  $('#change-password').show()

  $('#sign-in').hide()
  $('#sign-up').hide()

  $('#sign-in').trigger('reset')
  $('#user-messages').html('Sign in worked')
}

const onSignInFailure = function (data) {
  $('#user-messages').html('Sign in failed')
}

const onSignOutSuccess = function (data) {
  store.user = null

  $('#sign-out').hide()
  $('#change-password').hide()

  $('#sign-in').show()
  $('#sign-up').show()

  $('#user-messages').html('Sign out worked')
}

const onSignOutFailure = function (data) {
  $('#user-messages').html('Sign out failed')
}

const onChangePasswordSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#user-messages').html('change password worked')
}

const onChangePasswordFailure = function (data) {
  $('#user-messages').html('change password failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
