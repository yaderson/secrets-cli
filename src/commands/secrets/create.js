'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')

class SecretsCreateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsCreateCommand)
      const { username, name } = args
      
      await this.config.runHook('authenticate',{ username })

      const value = await cli.prompt('Enter your secret', { type: 'mask' })
      
      const myNewSecret = await secretServices.createSecret(username, name, value)
      
      this.log(`Secret ${ myNewSecret.name } Created successfully`)
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot create secrets')
      }
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
