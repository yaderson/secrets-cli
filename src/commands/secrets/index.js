'use strict'

const { Command } = require('@oclif/command')

class SecretsCommand extends Command {
  async run () {
    this._help()
  }
}

SecretsCommand.description = `Describe the command here
...
Mannage Secrets
`
module.exports = SecretsCommand
