const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { secretServices } = require('@secrets/services')
const { AUTHENTICATED, authenticate, isAuthenticated } = require('@secrets/auth')

class SecretsUpdateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsUpdateCommand)

      let password = AUTHENTICATED

      if (!await isAuthenticated(args.username)) {
        password = await cli.prompt('Enter your Password', { type: 'hide' })

        const isAuth = await authenticate(args.username, password)

        if (!isAuth) { throw new CLIError('Invalid User or Password') }
      }
      const value = await cli.prompt('Enter your secret', { type: 'mask' })
      const mySecretUpadted = await secretServices.updateSecret(args.username, args.name, value, password)

      if (!mySecretUpadted[0]) { throw new CLIError(`secret ${args.name} not found`) }

      this.log(`Secret ${args.name} updated successfully`)
    } catch (err) {
      throw new CLIError(`Cannot Update secret ${err}`)
    } finally {
      this.exit(0)
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
