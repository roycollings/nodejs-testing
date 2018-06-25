'use strict'

const assert = require('assert')
const adder = require('../src/adder')

describe('Test', () => {
  it('should add 2 and return the total', () => {
    assert (4 === adder(2));
  })
})