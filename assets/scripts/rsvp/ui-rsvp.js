'use strict'

const store = require('./../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const showOwnedTemplate = require('../templates/event-owned.handlebars')
const showUnsignedTemplate = require('../templates/events-signedOut.handlebars')

const onEventCreateSuccess = function (data) {
  $('#event-create').trigger('reset')
  $('#user-messages').html('Event created')
}

const onEventCreateFailure = function (data) {
  $('#user-messages').html('Failed to create event, please try again')
}

const onEventUpdateSuccess = function (data) {
  $('#update-event').trigger('reset')
  $('#user-messages').html('Event updated')
}

const onEventUpdateFailure = function (data) {
  $('#user-messages').html('Failed to update event, please try again')
}

const onEventDeleteSuccess = function (data) {
  $('#delete-event').trigger('reset')
  $('#user-messages').html('Event was deleted')
}

const onEventDeleteFailure = function (data) {
  $('#user-messages').html('Failed to delete event, please try again')
}

const onEventIndexSuccess = function (data) {
  $('#index-events').trigger('reset')
  $('#user-messages').html('Showing all events')

  const showEventsHtml = showEventsTemplate({ hangouts: data.events })
  $('#event-list').html(showEventsHtml)
}

const onEventIndexFailure = function (data) {
  $('#user-messages').html('Failed to show all events, please try again')
}

const onAllEventIndexSuccess = function (data) {
  $('#index-all-event').trigger('reset')
  $('#user-messages').html('')
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

const onRsvpEventSuccess = function (data) {
  console.log(data)
  $('#user-messages').html('rsvp event worked')
}

const onRsvpEventFailure = function (data) {
  $('#user-messages').html('rsvp event failed')
}

const onUnRsvpEventSuccess = function (data) {
  $('#user-messages').html('unrsvp event worked')
}

const onUnRsvpEventFailure = function (data) {
  $('#user-messages').html('unrsvp event failed')
}

const onRsvpUserSuccess = function (data) {
  $('#rsvp-event').trigger('reset')
  $('#user-messages').html('rsvp user worked')
}

const onRsvpUserFailure = function (data) {
  $('#user-messages').html('on rsvp user failed')
}

const onUnRsvpUserSuccess = function (data) {
  $('#rsvp-event').trigger('reset')
  $('#user-messages').html('on unrsvp user worked')
}

const onUnRsvpUserFailure = function (data) {
  $('#user-messages').html('unrsvp failed')
}

const showOwnedSuccess = function (data) {
  const showOwnedEvents = showOwnedTemplate({ hangouts: data.events })
  $('#event-list').html(showOwnedEvents)
}

const showOwnedFailure = function (data) {
  $('#user-messages').html('owned failed')
}

const showUnsignedSuccess = function (data) {
  const showUnsignedEvents = showUnsignedTemplate({ hangouts: data.events })
  $('#event-list').html(showUnsignedEvents)
}

const showUnsignedFailure = function (data) {
  $('#user-messages').html('unsigned event failed')
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
  onUpdateHandlebarsFailure,
  onRsvpEventSuccess,
  onRsvpEventFailure,
  onRsvpUserSuccess,
  onRsvpUserFailure,
  onUnRsvpEventSuccess,
  onUnRsvpEventFailure,
  onUnRsvpUserSuccess,
  onUnRsvpUserFailure,
  showOwnedSuccess,
  showOwnedFailure,
  showUnsignedSuccess,
  showUnsignedFailure
}
