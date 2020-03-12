'use strict'
const store = require('./../store')

const onEventCreateSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#user-messages').html('create event worked')
}

const onEventCreateFailure = function (data) {
  $('#user-messages').html('create event failed')
}

const onEventUpdateSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#user-messages').html('update event worked')
}

const onEventUpdateFailure = function (data) {
  $('#user-messages').html('update event failed')
}

const onEventDeleteSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#user-messages').html('delete event worked')
}

const onEventDeleteFailure = function (data) {
  $('#user-messages').html('delete event failed')
}

const onEventIndexSuccess = function (data) {
  $('#change-password').trigger('reset')
  console.log(data)
  $('#user-messages').html('index event worked')
}

const onEventIndexFailure = function (data) {
  $('#user-messages').html('Index event failed')
}

const onAllEventIndexSuccess = function (data) {
  $('#change-password').trigger('reset')
  console.log(data)
  $('#user-messages').html('index event worked')
}

const onAllEventIndexFailure = function (data) {
  $('#user-messages').html('Index event failed')
}

module.exports = {
  onEventCreateSuccess,
  onEventCreateFailure,
  onEventUpdateSuccess,
  onEventUpdateFailure,
  onEventDeleteSuccess,
  onEventDeleteFailure,
  onEventIndexSuccess,
  onEventIndexFailure,
  onAllEventIndexSuccess,
  onAllEventIndexFailure
}
