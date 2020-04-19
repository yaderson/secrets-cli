'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { userServices } = require('@secrets/services')

class UsersCreateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(UsersCreateCommand)
      const password = await cli.prompt('Enter your Password', { type: 'hide' })

      cli.action.start('Creating user...')

      const myNewUser = await userServices.createUser(args.username, password)

      cli.action.stop()
      this.log(`User ${myNewUser.username} Created with id ${myNewUser.id}`)
    } catch (error) {
      throw new CLIError(`Cannot Create User ${error}`)
    }
  }
}

UsersCreateCommand.description = `Describe the command here
...
Create an User
`

UsersCreateCommand.flags = {}

UsersCreateCommand.args = [
  { name: 'username', required: true }
]

module.exports = UsersCreateCommand
