const { curry } = require('./')

const zip = (a, b) => a.map((v, i) => [v, b[i]])
const zipWith = (f, a, b) => a.map((v, i) => f(v, b[i]))
const cycle = (count, [h, ...t], result = []) => count > 0 ? cycle(count - 1, [...t, h], [...result, h]) : result
const replicate = (length, value, data = []) => length ? replicate(length - 1, value, [...data, value]) : data

const splitArray = (ary, zip) => (
  ary.reduce(
    ({ head, tail }, x, i) => i < zip
      ? ({ head: [...head, x], tail })
      : ({ head, tail: [...tail, x] })
    , { head: [], tail: [] })
)

module.exports = {
  cycle: curry(cycle),
  replicate: curry(replicate),
  splitArray: curry(splitArray),
  zip: curry(zip),
  zipWith: curry(zipWith)
}
