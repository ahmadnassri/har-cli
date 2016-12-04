#!/usr/bin/env node

import yargs from 'yargs'

yargs.commandDir('commands')
  .demand(1)
  .help()
  .argv
