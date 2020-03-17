'use strict'

const store = require('./../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const showOwnedTemplate = require('../templates/event-owned.handlebars')
const showUnsignedTemplate = require('../templates/events-signedOut.handlebars')

const onEventCreateSuccess = function (data) {
  $('#create-event').trigger('reset')
  $('#user-messages').html('Event created')
}

const onEventCreateFailure = function (data) {
  $('#user-messages').html('Failed to create event')
}

const onEventUpdateSuccess = function (data) {
  $('#update-event').trigger('reset')
  $('#user-messages').html('Event updated')
  $('.modal-backdrop').remove()
}

const onEventUpdateFailure = function (data) {
  $('#user-messages').html('Failed to update event')
}

const onEventDeleteSuccess = function (data) {
  $('#user-messages').html('Event deleted')
}

const onEventDeleteFailure = function (data) {
  $('#user-messages').html('Failed to delete event')
}

const onEventIndexSuccess = function (data) {
  $('#user-messages').html('Showing events')
  $('#index-event').hide()
  $('#show-owned').show()

  const showEventsHtml = showEventsTemplate({ hangouts: data.events })
  $('#event-list').html(showEventsHtml)
}

const onEventIndexFailure = function (data) {
  $('#user-messages').html('Failed to show events, please try again')
}

const onAllEventIndexSuccess = function (data) {
  $('#user-messages').html('Showing events')
}

const onAllEventIndexFailure = function (data) {
  $('#user-messages').html('Failed to show events, please try again')
}

const onUpdateHandlebarsSuccess = function (data) {
  const showEventsHtml = showEventsTemplate({ hangouts: data.events })
  $('#event-list').html(showEventsHtml)
}

const onUpdateHandlebarsFailure = function (data) {
  $('#user-messages').html('Failed to update event list')
}

const onRsvpEventSuccess = function (data) {
  $('#user-messages').html("Successfully RSVP'd")
}

const onRsvpEventFailure = function (data) {
  $('#user-messages').html('Failed to RSVP')
}

const onUnRsvpEventSuccess = function (data) {
  $('#user-messages').html("Successfully qUn-RSVP'd")
}

const onUnRsvpEventFailure = function (data) {
  $('#user-messages').html('Failed to Un-RSVP')
}

const onRsvpUserSuccess = function (data) {
  $('#user-messages').html("Successfully RSVP'd")
}

const onRsvpUserFailure = function (data) {
  $('#user-messages').html('Failed to Un-RSVP')
}

const onUnRsvpUserSuccess = function (data) {
  $('#user-messages').html('Successfully Un-RSVP')
}

const onUnRsvpUserFailure = function (data) {
  $('#user-messages').html('Failed to Un-RSVP')
}

const showOwnedSuccess = function (data) {
  const showOwnedEvents = showOwnedTemplate({ hangouts: data.events })
  $('#event-list').html(showOwnedEvents)
  $('#index-event').show()
  $('#show-owned').hide()
}

const showOwnedFailure = function (data) {
  $('#user-messages').html('Failed to get your events')
}

const showUnsignedSuccess = function (data) {
  const showUnsignedEvents = showUnsignedTemplate({ hangouts: data.events })
  $('#event-list').html(showUnsignedEvents)
}

const showUnsignedFailure = function (data) {
  $('#user-messages').html('Failed to show events, please try again')
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
