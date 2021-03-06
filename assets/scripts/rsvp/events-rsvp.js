'user strict'

const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const api = require('./api-rsvp')
const ui = require('./ui-rsvp')

const updateHandlebars = function () {
  $('#index-event').hide()
  $('#show-owned').show()

  api.eventIndex()
    .then(ui.onUpdateHandlebarsSuccess)
    .catch(ui.onUpdateHandlebarsFailure)
}

const updateOwnedHandlebars = function () {
  $('#index-event').show()
  $('#show-owned').hide()

  api.showOwned()
    .then(ui.showOwnedSuccess)
    .catch(ui.showOwnedFailure)
}

const onEventCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  if (data.event.title === '') {
    $('#user-messages').html('Title cannot empty, please try again')
  } else if (data.event.date === '') {
    $('#user-messages').html('Date cannot empty, please try again')
  } else if (data.event.time === '') {
    $('#user-messages').html('Time cannot empty, please try again')
  } else if (data.event.location === '') {
    $('#user-messages').html('Location cannot empty. Try again')
  } else {
    api.eventCreate(data)
      .then(ui.onEventCreateSuccess)
      .then(updateHandlebars)
      .catch(ui.onEventCreateFailure)
  }
}
const onEventUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  const eventId = $(event.target).closest('div').data('id')

  $('#updateModal').modal('hide')

  api.eventUpdate(data, eventId)
    .then(ui.onEventUpdateSuccess)
    .then(updateOwnedHandlebars)
    .catch(ui.onEventUpdateFailure)
}

const onEventDelete = function (event) {
  event.preventDefault()

  const data = $(event.target).closest('div').data('id')

  api.eventDelete(data)
    .then(ui.onEventDeleteSuccess)
    .then(updateOwnedHandlebars)
    .catch(ui.onEventDeleteFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)

  api.eventIndex()
    .then(ui.onEventIndexSuccess)
    .catch(ui.onEventIndexFailure)
}

const onAllEventIndex = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)

  api.allEventIndex()
    .then(ui.onAllEventIndexSuccess)
    .catch(ui.onAllEventIndexFailure)
}

const onRsvpEvent = function (event) {
  event.preventDefault()

  const data = $(event.target).closest('div').data('id')

  api.rsvpEvent(data)
    .then(ui.onRsvpEventSuccess)
    .catch(ui.onRsvpEventFailure)

    .then(api.rsvpUser(data))
    .then(ui.onRsvpUserSuccess)
    .then(updateHandlebars)
    .catch(ui.onRsvpUserFailure)
}

const onUnRsvpEvent = function (event) {
  event.preventDefault()

  const data = $(event.target).closest('div').data('id')

  api.unRsvpEvent(data)
    .then(ui.onUnRsvpEventSuccess)
    .catch(ui.onUnRsvpEventFailure)

    .then(api.unRsvpUser(data))
    .then(ui.onUnRsvpUserSuccess)
    .then(updateHandlebars)
    .catch(ui.onUnRsvpUserFailure)
}

const showOwned = function (data) {
  event.preventDefault()
  api.showOwned()
    .then(ui.showOwnedSuccess)
    .catch(ui.showOwnedFailure)
}

const onPageLoad = function () {
  api.allEventIndex()
    .then(ui.showUnsignedSuccess)
    .catch(ui.showUnsignedFailure)
}

module.exports = {
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  onEventIndex,
  onAllEventIndex,
  onRsvpEvent,
  onUnRsvpEvent,
  showOwned,
  onPageLoad,
  updateHandlebars
}
