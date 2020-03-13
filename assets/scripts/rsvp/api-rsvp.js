'use strict'

const config = require('./../config')
const store = require('./../store')

const eventCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventUpdate = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/events/' + data.event.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventDelete = function (eventId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/events/' + eventId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const eventIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const rsvpEvent = function (eventId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/events/rsvp/' + eventId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const rsvpUser = function (eventId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/users/rsvp/' + eventId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const unRsvpEvent = function (eventId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/events/unrsvp/' + eventId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const unRsvpUser = function (eventId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/users/unrsvp/' + eventId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const allEventIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/events/openall'
  })
}

const showOwned = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/events/owned',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  eventCreate,
  eventUpdate,
  eventDelete,
  eventIndex,
  allEventIndex,
  rsvpEvent,
  rsvpUser,
  unRsvpEvent,
  unRsvpUser,
  showOwned
}
