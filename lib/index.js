#!/usr/bin/env node

'use strict'

const yargs = require('yargs')

yargs.commandDir('commands')
  .demand(1)
  .help()
