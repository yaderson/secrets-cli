'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { secretServices } = require('@secrets/services')

class SecretsDeleteCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsDeleteCommand)

      const { username, name } = args

      await this.config.runHook('authenticate', { username })

      const myDeletedSecret = await secretServices.deleteSecret(username, name)

      if (!myDeletedSecret) { throw new CLIError(`secret ${name} not found`) }

      this.log(`Secret ${name} deleted successfully`)
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot delete secrets')
      }
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
