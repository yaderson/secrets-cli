'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')
const { AUTHENTICATED, authenticate, isAuthenticated } = require('@secrets/auth')
class SecretsListCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsListCommand)

      let password = AUTHENTICATED

      if (!await isAuthenticated(args.username)) {
        password = await cli.prompt('Enter your Password', { type: 'hide' })

        const isAuth = await authenticate(args.username, password)
        
        if (!isAuth) { throw new CLIError('Invalid User Or Password') }
      }

      const mySecrets = await secretServices.listSecrets(args.username)

      const columns = {
        name: {
          header: 'NAME'
        },
        createdAt: {
          header: 'CREATED AT'
        }
      }
      cli.table(mySecrets.rows, columns)
      this.log(`\t Total: ${mySecrets.count}`)
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot list secrets')
      }
    }
  }
}

SecretsListCommand.description = `List Secrets of an user
...

`

SecretsListCommand.flags = {}

SecretsListCommand.args = [
  { name: 'username', required: true }
]

module.exports = SecretsListCommand
