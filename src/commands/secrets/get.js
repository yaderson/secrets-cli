'use strict'

const clipboardy = require('clipboardy')
const { Command, flags } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')

class SecretsGetCommand extends Command {
  async run () {
    try {
      const { args, flags } = this.parse(SecretsGetCommand)
      

      const { username, name } = args

      await this.config.runHook('authenticate',{ username })
      
      const mySecret = await secretServices.getSecret(username, name)
      
      if(flags.copy){
        cli.action.start('Copying to clipboard')
        clipboardy.writeSync(mySecret.value)
        cli.action.stop('Copied to clipboard')
      }else{
        this.log(mySecret.name + ': ' + mySecret.value)
      }
      this.exit()
    } catch (err) {
      if (err instanceof CLIError) {
        throw err
      } else {
        throw new CLIError('Cannot get secrets')
      }
    }
  }
}

SecretsGetCommand.description = `Get a Secret of an user
...

`

SecretsGetCommand.flags = {
  copy: flags.boolean({ char: 'c' })
}

SecretsGetCommand.args = [
  { name: 'username', required: true },
  { name: 'name', required: true }
]

module.exports = SecretsGetCommand
