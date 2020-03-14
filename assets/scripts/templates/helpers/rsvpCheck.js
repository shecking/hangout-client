'use strict'

const store = require('./../../store')

const rsvpCheck = (userArray) => {
  if (userArray.includes(store.user._id)) {
    return 'unrsvp'
  } else {
    return 'rsvp'
  }
}

module.exports = rsvpCheck
