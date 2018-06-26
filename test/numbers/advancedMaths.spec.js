const assert = require('assert');
var advancedMaths = require('../../src/numbers/advancedMaths.js');

describe('advancedMaths.multiply', () => {
  it('multiplies the two numbers and return the total', () => {
    assert(4 === advancedMaths.multiply(2, 2));
  })
})

describe('advancedMaths.divide', () => {
  it('divides the first number by the second and return the total', () => {
    assert(5 === advancedMaths.divide(10, 2));
  })
})

describe('advancedMaths.mod', () => {
  it('reurns the remainder when dividing the first number by the second', () => {
    assert(1 === advancedMaths.mod(10, 3));
  })
})