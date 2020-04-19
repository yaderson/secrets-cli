'use strict'

const clipboardy = require('clipboardy')
const { Command, flags } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')
const { AUTHENTICATED, authenticate, isAuthenticated } = require('@secrets/auth')

class SecretsGetCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsGetCommand)
      const {flags} = this.parse(SecretsGetCommand)

      let password = AUTHENTICATED

      if (!await isAuthenticated(args.username)) {
        password = await cli.prompt('Enter your Password', { type: 'hide' })

        const isAuth = await authenticate(args.username, password)

        if (!isAuth) { throw new CLIError('Invalid User or Password') }
      }

      const mySecret = await secretServices.getSecret(args.username, args.name, password)
      
      if (!mySecret) { throw new CLIError(`secret ${args.name} not found`) }
      
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
