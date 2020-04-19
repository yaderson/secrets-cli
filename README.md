secrets-cli
===========

secrets manager

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/secrets-cli.svg)](https://npmjs.org/package/secrets-cli)
[![Downloads/week](https://img.shields.io/npm/dw/secrets-cli.svg)](https://npmjs.org/package/secrets-cli)
[![License](https://img.shields.io/npm/l/secrets-cli.svg)](https://github.com/2020/secrets-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g secrets-cli
$ secrets-cli COMMAND
running command...
$ secrets-cli (-v|--version|version)
secrets-cli/0.0.0 win32-x64 node-v12.16.2
$ secrets-cli --help [COMMAND]
USAGE
  $ secrets-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`secrets-cli help [COMMAND]`](#secrets-cli-help-command)
* [`secrets-cli secrets`](#secrets-cli-secrets)
* [`secrets-cli secrets:create USERNAME NAME`](#secrets-cli-secretscreate-username-name)
* [`secrets-cli secrets:delete USERNAME NAME`](#secrets-cli-secretsdelete-username-name)
* [`secrets-cli secrets:get USERNAME NAME`](#secrets-cli-secretsget-username-name)
* [`secrets-cli secrets:list USERNAME`](#secrets-cli-secretslist-username)
* [`secrets-cli secrets:update USERNAME NAME`](#secrets-cli-secretsupdate-username-name)
* [`secrets-cli users`](#secrets-cli-users)
* [`secrets-cli users:create USERNAME`](#secrets-cli-userscreate-username)
* [`secrets-cli users:list`](#secrets-cli-userslist)

## `secrets-cli help [COMMAND]`

display help for secrets-cli

```
USAGE
  $ secrets-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src\commands\help.ts)_

## `secrets-cli secrets`

Describe the command here

```
USAGE
  $ secrets-cli secrets

DESCRIPTION
  ...
  Mannage Secrets
```

_See code: [src\commands\secrets\index.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\index.js)_

## `secrets-cli secrets:create USERNAME NAME`

Create an Secret

```
USAGE
  $ secrets-cli secrets:create USERNAME NAME

DESCRIPTION
  ...
```

_See code: [src\commands\secrets\create.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\create.js)_

## `secrets-cli secrets:delete USERNAME NAME`

Delete a Secret

```
USAGE
  $ secrets-cli secrets:delete USERNAME NAME

DESCRIPTION
  ...
```

_See code: [src\commands\secrets\delete.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\delete.js)_

## `secrets-cli secrets:get USERNAME NAME`

Get a Secret of an user

```
USAGE
  $ secrets-cli secrets:get USERNAME NAME

OPTIONS
  -c, --copy

DESCRIPTION
  ...
```

_See code: [src\commands\secrets\get.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\get.js)_

## `secrets-cli secrets:list USERNAME`

List Secrets of an user

```
USAGE
  $ secrets-cli secrets:list USERNAME

DESCRIPTION
  ...
```

_See code: [src\commands\secrets\list.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\list.js)_

## `secrets-cli secrets:update USERNAME NAME`

Update a Secret

```
USAGE
  $ secrets-cli secrets:update USERNAME NAME

DESCRIPTION
  ...
```

_See code: [src\commands\secrets\update.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\secrets\update.js)_

## `secrets-cli users`

Describe the command here

```
USAGE
  $ secrets-cli users

DESCRIPTION
  ...
  Mannage User
```

_See code: [src\commands\users\index.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\users\index.js)_

## `secrets-cli users:create USERNAME`

Describe the command here

```
USAGE
  $ secrets-cli users:create USERNAME

DESCRIPTION
  ...
  Create an User
```

_See code: [src\commands\users\create.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\users\create.js)_

## `secrets-cli users:list`

Describe the command here

```
USAGE
  $ secrets-cli users:list

DESCRIPTION
  ...
  List All Users
```

_See code: [src\commands\users\list.js](https://github.com/2020/secrets-cli/blob/v0.0.0/src\commands\users\list.js)_
<!-- commandsstop -->
