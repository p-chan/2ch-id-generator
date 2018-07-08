'use strict'

const crypto = require('crypto')

module.exports = function (args = {}) {
  const ip = args.ip || '127.0.0.1'
  const key = args.key || 'news4vip'
  const rand = args.rand || 'fusianasan'
  const length = args.length || 9

  const cryptedIp = crypto
    .createHash('md5')
    .update(ip)
    .digest('hex')
    .substr(-4)

  const cryptedDate = crypto
    .createHash('md5')
    .update(rand)
    .digest('hex')
    .substr(8)

  return crypto
    .createHash('md5')
    .update(`${cryptedIp}${key}${cryptedDate}`)
    .digest('base64')
    .substr(0, length)
}
