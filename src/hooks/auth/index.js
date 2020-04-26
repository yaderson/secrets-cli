const { authenticate, isAuthenticated } =  require('@secrets/auth')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')


module.exports = async function ({ username }){
    try{
        if (!await isAuthenticated(username)) {
            password = await cli.prompt('Enter your Password', { type: 'hide' })
            const isAuth = await authenticate(username, password)
            if (!isAuth) { throw new CLIError('Invalid User or Password') }
        }
    } catch (err){
        
        throw new CLIError(err)
    }
} 