import * as validate from '../src/commands/validate'
import { test } from 'tap'

test('valid yargs command', (assert) => {
  assert.plan(4)

  assert.type(validate.command, 'string')
  assert.type(validate.description, 'string')
  assert.type(validate.builder, 'function')
  assert.type(validate.handler, 'function')
})
