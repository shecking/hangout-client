'use strict'

const store = require('./../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')

const onEventCreateSuccess = function (data) {
  $('#event-create').trigger('reset')
  $('#user-messages').html('create event worked')
}

const onEventCreateFailure = function (data) {
  $('#user-messages').html('create event failed')
}

const onEventUpdateSuccess = function (data) {
  $('#update-event').trigger('reset')
  $('#user-messages').html('update event worked')
}

const onEventUpdateFailure = function (data) {
  $('#user-messages').html('update event failed')
}

const onEventDeleteSuccess = function (data) {
  $('#delete-event').trigger('reset')
  $('#user-messages').html('delete event worked')
}

const onEventDeleteFailure = function (data) {
  $('#user-messages').html('delete event failed')
}

const onEventIndexSuccess = function (data) {
  $('#index-events').trigger('reset')
  $('#user-messages').html('index event worked')

  const showEventsHtml = showEventsTemplate({ hangouts: data.events })
  $('#event-list').html(showEventsHtml)
}

const onEventIndexFailure = function (data) {
  $('#user-messages').html('Index event failed')
}

const onAllEventIndexSuccess = function (data) {
  $('#index-all-event').trigger('reset')
  console.log(data)
  $('#user-messages').html('index event worked')
}

const onAllEventIndexFailure = function (data) {
  $('#user-messages').html('Index event failed')
}

const onUpdateHandlebarsSuccess = function (data) {
  const showEventsHtml = showEventsTemplate({ hangouts: data.events })
  $('#event-list').html(showEventsHtml)
}

const onUpdateHandlebarsFailure = function (data) {
  console.log('update handlebars failed')
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
  onAllEventIndexFailure,
  onUpdateHandlebarsSuccess,
  onUpdateHandlebarsFailure
}
