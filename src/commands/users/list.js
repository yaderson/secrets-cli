'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { userServices } = require('@secrets/services')

class UsersListCommand extends Command {
  async run () {
    try {
      const allUsers = await userServices.listUsers()
      // this.log(allUsers.rows)
      const columns = {
        id: {
          header: 'ID'
        },
        username: {
          header: 'NAME'
        }
      }

      cli.table(allUsers.rows, columns)
    } catch (error) {
      throw new CLIError(`Cannot Create User ${error}`)
    }
  }
}

UsersListCommand.description = `Describe the command here
...
List All Users
`

module.exports = UsersListCommand
