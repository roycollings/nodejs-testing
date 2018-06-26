const assert = require('assert');
var basicMaths = require('../../src/numbers/basicMaths');

describe('basicMaths.add', () => {
  it('should add the two numbers and return the total', () => {
    assert(4 === basicMaths.add(2, 2));
  })
})

describe('basicMaths.subtract', () => {
  it('should subtract the second number from the first and return the total', () => {
    assert(1 === basicMaths.subtract(3, 2));
  })
})