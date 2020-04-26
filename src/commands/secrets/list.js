'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')

class SecretsListCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsListCommand)

      const { username } = args

      await this.config.runHook('authenticate', { username })

      const mySecrets = await secretServices.listSecrets(username)

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
