'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')
const { AUTHENTICATED, authenticate, isAuthenticated } = require('@secrets/auth')

class SecretsDeleteCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsDeleteCommand)

      let password = AUTHENTICATED

      if (!await isAuthenticated(args.username)) {
        password = await cli.prompt('Enter your Password', { type: 'hide' })

        const isAuth = await authenticate(args.username, password)

        if (!isAuth) { throw new CLIError('Invalid User or Password') }
      }

      const myDeletedSecret = await secretServices.deleteSecret(args.username, args.name)

      if (!myDeletedSecret) { throw new CLIError(`secret ${args.name} not found`) }

      this.log(`Secret ${args.name} deleted successfully`)
    } catch (err) {
      throw new CLIError(`Cannot delete secret ${err}`)
    } finally {
      this.exit(0)
    }
  }
}

SecretsDeleteCommand.description = `Delete a Secret
...

`

SecretsDeleteCommand.flags = {}

SecretsDeleteCommand.args = [
  { name: 'username', required: true },
  { name: 'name', required: true }
]

module.exports = SecretsDeleteCommand
