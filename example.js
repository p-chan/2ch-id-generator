'use strict'

// require module
const idGenerator = require('./index')

// generate id
const id = idGenerator({
  ip: '127.0.0.1',
  key: 'news4vip',
  rand: 'fusianasan',
  length: 9
})

// output id
console.log(id)
