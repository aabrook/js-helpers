const { prepend } = require('./strings')
const { bool } = require('./bool')
const id = (a) => a

const log = (logger = console.log) => (fn) => (...args) => {
  logger('args', ...args)
  const result = fn(...args)
  logger('result', result)
  return result
}

const Try = (fn, success, error = id) => (...args) => {
  try {
    return success(fn(...args))
  } catch (e) {
    return error(e)
  }
}

const compose = (...funcs) => (...args) => funcs.reduce((acc, fn) => (...args) => acc(fn(...args)))(...args)

const $ = (f, args) => f(args)

const flip = (f, b, a) => f(b, a)

const curry = (f) => {
  const build = (...args) => (
    args.length >= f.length
      ? f(...args)
      : (...argv) => build(...args, ...argv)
  )

  return build
}

const map = (f, xs) => xs.map(f)
const filter = (f, xs) => xs.filter(f)
const foldl = (f, x, xs) => xs.reduce(f, x)
const foldr = (f, x, xs) => xs.reduceRight(f, x)

const snd = (...args) => args[1]
const fst = (...args) => args[0]

module.exports = {
  $: curry($),
  bool: curry(bool),
  compose,
  curry,
  filter: curry(filter),
  flip: curry(flip),
  foldl: curry(foldl),
  foldr: curry(foldr),
  map: curry(map),
  prepend: curry(prepend),
  log: log,
  id,
  snd,
  fst,
  Try: curry(Try)
}
