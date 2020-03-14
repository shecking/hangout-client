'use strict'

const moment = require('moment')

const updateDate = function (str) {
  const formattedDate = moment(str)
  return formattedDate.format('MM/DD/YYYY')
}

module.exports = updateDate
