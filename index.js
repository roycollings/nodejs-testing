'use strict'

module.exports = list => list.map(x => x * 2).reduce((prev, curr) => prev += curr, 0)