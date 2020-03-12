'user strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-rsvp')
const ui = require('./ui-rsvp')

const onEventCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventCreate(data)
    .then(ui.onEventCreateSuccess)
    .catch(ui.onEventCreateFailure)
}
const onEventUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventUpdate(data)
    .then(ui.onEventUpdateSuccess)
    .catch(ui.onEventUpdateFailure)
}

const onEventDelete = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventDelete(data)
    .then(ui.onEventDeleteSuccess)
    .catch(ui.onEventDeleteFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventIndex(data)
    .then(ui.onEventIndexSuccess)
    .catch(ui.onEventIndexFailure)
}

module.exports = {
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  onEventIndex
}
