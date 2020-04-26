const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')

class SecretsUpdateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsUpdateCommand)

      const { username, name } = args

      await this.config.runHook('authenticate', { username })

      const value = await cli.prompt('Enter your secret', { type: 'mask' })

      await secretServices.updateSecret(username, name, value)

      this.log(`Secret ${name} updated successfully`)
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot update secrets')
      }
    }
  }
}

SecretsUpdateCommand.description = `Update a Secret
...

`

SecretsUpdateCommand.flags = {}

SecretsUpdateCommand.args = [
  { name: 'username', required: true },
  { name: 'name', required: true }
]

module.exports = SecretsUpdateCommand
