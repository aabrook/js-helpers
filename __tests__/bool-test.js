const assert = require('assert')
const sinon = require('sinon')
const { bool } = require('../bool')

describe('bool', () => {
  it('should return the first param when condition is false', () => (
    assert.equal(bool('false result', 'true result', false), 'false result')
  ))

  it('should return the second param when condition is true', () => (
    assert.equal(bool('false result', 'true result', true), 'true result')
  ))

  it('should require args when the condition is a function', () => (
    assert.equal(typeof bool(a => a, a => a, a => a), 'function')
  ))

  it('should provide args to conditions when they are functions', () => {
    const t = sinon.spy()
    const f = sinon.spy()
    bool(f, t, _ => false)('a')
    assert(f.calledWith('a'))
    assert(!t.called)

    f.reset()
    bool(f, t, _ => true)('b')
    assert(t.calledWith('b'))
    assert(!f.called)
  })

  it('should not require functions for responses when condition is a function', () => {
    assert.equal(bool('abc', _ => assert.fail(), _ => false)('a'), 'abc')
    assert.equal(bool(_ => assert.fail(), 'abc', _ => true)('a'), 'abc')
  })
})
