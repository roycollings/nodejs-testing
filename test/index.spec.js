'use strict'

const assert = require('assert')
const underTest = require('../')

describe('Test', () => {
  it('should multiple element in given list by 2 and return the total', () => {
    assert(underTest([1,2,3]) === 12)
  })
})