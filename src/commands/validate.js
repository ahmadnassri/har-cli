import * as validate from 'har-validator'
import chalk from 'chalk'
import fs from 'fs'
import HARError from 'har-validator/lib/node4/error'
import path from 'path'
import Promise from 'smart-promise'

export const command = 'validate <files..>'

export const description = 'validate HAR Schema'

export function builder (yargs) {
  return yargs.option('schema', {
    alias: 's',
    default: 'har',
    choices: Object.keys(validate).filter((key) => key !== 'validator').sort()
  })
}

export function handler (argv) {
  argv.files.map((fileName) => {
    let file = chalk.yellow.italic(path.basename(fileName))

    new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => err === null ? resolve(data) : reject(err))
    })

    .then(JSON.parse)
    .then(validate[argv.schema])
    .then((data) => console.log('%s [%s] is a valid %s', chalk.green('✓'), file, chalk.magenta(argv.schema)))
    .catch(SyntaxError, (err) => {
      console.error('[%s]', file)

      return console.error('%s failed to read JSON: %s', chalk.red('✖'), chalk.red(err.message))
    })

    .catch(HARError, (err) => {
      console.error('[%s]', file)

      err.errors.forEach((details) => console.error('%s validation failed on %s: %s', chalk.red('✖'), chalk.cyan.italic(details.dataPath || '.'), chalk.red(details.message)))
    })

    .catch((err) => {
      console.error('%s an unknown error has occured: %s', chalk.red('✖'), chalk.red(err.message))
    })
  })
}
