'use strict'

const db = require('@secrets/db')
const { comparePassword, generateKey } = require('@secrets/crypto')
const AUTHENTICATED = Symbol('AUTHENTICATED')

async function getAuthenticateUser (username, pass) {
  const user = await db.users.findOne({ where: { username } })

  if (!user) { return false }

  const hash = user.password

  if (await comparePassword(pass, hash)) {
    await db.redisClient.set(username, generateKey(pass), 'EX', 120)
    
    return user
  }

  return null
}

async function authenticate (username, pass) {
  const user = await getAuthenticateUser(username, pass)

  if (user) {
    return user
  }

  return false
}

function getSecretkey (username, password) {
  if (password === AUTHENTICATED) { return db.redisClient.get(username) }
  return generateKey(password)
}

async function isAuthenticated (username) {
  return db.redisClient.get(username)
}

module.exports = {
  AUTHENTICATED,
  authenticate,
  getSecretkey,
  isAuthenticated
}
