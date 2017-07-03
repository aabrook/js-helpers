const assert = require('assert')
const { map, filter, foldl, foldr, fst, snd } = require('../')

describe('simpler functions', () => {
  it('should return the second argument', () => (
    assert.equal(snd('a', 'b'), 'b')
  ))

  it('should return the first argument', () => (
    assert.equal(fst('a', 'b'), 'a')
  ))

  it('should map', () => (
    assert.deepEqual(map(a => a + 1)([1, 2, 3, 4]), [2, 3, 4, 5])
  ))

  it('should filter', () => (
    assert.deepEqual(filter(a => a > 3)([1, 2, 3, 4]), [4])
  ))

  it('should fold left', () => (
    assert.equal(foldl((acc, i) => acc * i + 1, 1, [2, 0]), 1)
  ))

  it('should fold right', () => (
    assert.equal(foldr((acc, i) => acc * i + 1, 1, [2, 0]), 3)
  ))
})
