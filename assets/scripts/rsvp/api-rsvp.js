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
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventDelete = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventIndex = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  eventCreate,
  eventUpdate,
  eventDelete,
  eventIndex
}
