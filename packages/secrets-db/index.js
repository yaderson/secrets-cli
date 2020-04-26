'use strict'

const Redis = require('ioredis')
const db = require('./models')

db.createRedisClient = () => {
  return new Redis(6379, '40.117.228.152')
}

module.exports = db