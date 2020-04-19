'use strict'

const { Command } = require('@oclif/command')

class UsersCommand extends Command {
  async run () {
    this._help()
  }
}

UsersCommand.description = `Describe the command here
...
Mannage User
`

module.exports = UsersCommand
