'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')
const { AUTHENTICATED, authenticate, isAuthenticated } = require('@secrets/auth')

class SecretsCreateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsCreateCommand)

      let password = AUTHENTICATED

      if (!await isAuthenticated(args.username)) {
        password = await cli.prompt('Enter your Password', { type: 'hide' })

        const isAuth = await authenticate(args.username, password)

        if (!isAuth) { throw new CLIError('Invalid User or Password') }
      }
      const value = await cli.prompt('Enter your secret', { type: 'mask' })

      const myNewSecret = await secretServices.createSecret(args.username, password, args.name, value)

      this.log(`Secret ${myNewSecret.name} Created successfully`)
    } catch (err) {
      throw new CLIError(`Cannot Create secret ${err} `)
    } finally {
      this.exit(0)
    }
  }
}

SecretsCreateCommand.description = `Create an Secret
...

`

SecretsCreateCommand.flags = {}

SecretsCreateCommand.args = [
  { name: 'username', required: true },
  { name: 'name', required: true }
]

module.exports = SecretsCreateCommand
