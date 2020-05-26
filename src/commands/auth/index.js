'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')

class AuthCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(AuthCommand)
      const { username } = args
      await this.config.runHook('authenticate', { username })
      this.logs('User Authenticate Sucess')
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot Authenticate')
      }
    }
  }
}

AuthCommand.description = `Authenticate an user
...

`

AuthCommand.flags = {}

AuthCommand.args = [{ name: 'username', required: true }]

module.exports = AuthCommand
