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

  $('#create-event').show()
  $('#update-event').show()
  $('#delete-event').show()
  $('#index-event').show()
  $('#index-all-events').show()

  $('#sign-in').hide()
  $('#sign-up').hide()

  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
  $('#create-event').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#user-messages').html('Sign in worked')
}

const onSignInFailure = function (data) {
  $('#user-messages').html('Sign in failed')
}

const onSignOutSuccess = function (data) {
  store.user = null

  $('#sign-out').hide()
  $('#change-password').hide()

  $('#create-event').hide()
  $('#update-event').hide()
  $('#delete-event').hide()
  $('#index-event').hide()
  $('#index-all-events').hide()

  $('#sign-in').show()
  $('#sign-up').show()

  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
  $('#create-event').trigger('reset')
  $('#sign-up').trigger('reset')
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

const onGetEventsArraySuccess = function (data) {
  console.log(data.user.events)
}

const onGetEventsArrayFailure = function (data) {
  $('#user-messages').html('nah dawg')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onGetEventsArraySuccess,
  onGetEventsArrayFailure
}
