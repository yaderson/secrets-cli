const db = require('@secrets/db')

function createUser (user, password) {
  return db.users.create({
    username: user,
    password
  })
}

function listUsers () {
  return db.users.findAndCountAll()
}

module.exports = {
  createUser,
  listUsers
}
