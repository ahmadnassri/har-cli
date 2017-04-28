#!/usr/bin/env node

'use strict'

const yargs = require('yargs')

yargs.commandDir('commands') // eslint-disable-line no-unused-expressions
  .demand(1)
  .help()
  .argv
