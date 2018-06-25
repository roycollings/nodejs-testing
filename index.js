'use strict'

module.exports = {
    multiplier: list => list.map(x => x * 2).reduce((prev, curr) => prev += curr, 0),
    boolianiser: bool => !bool
}