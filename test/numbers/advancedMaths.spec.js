const assert = require('assert');
var advancedMaths = require('../../src/numbers/advancedMaths.js');

describe('Advanced Maths', () => {
  it('should multiply the two numbers and return the total', () => {
    assert(4 === advancedMaths.multiply(2, 2));
  })
})

describe('Advanced Maths', () => {
  it('should divide the first number by the second and return the total', () => {
    assert(5 === advancedMaths.divide(10, 2));
  })
})