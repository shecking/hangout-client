'use strict'

let apiUrl
const apiUrls = {
  // production: 'https://mysterious-island-33488.herokuapp.com',
  production: '',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
