const { curry } = require('./')

const bool = (f, t, c) => {
  if (typeof c === 'function') {
    return (...args) => {
      if (c(...args)) {
        return (typeof t === 'function') ? t(...args) : t
      }

      return (typeof f === 'function') ? f(...args) : f
    }
  }

  return c ? t : f
}

module.exports = ({
  bool: curry(bool)
})
