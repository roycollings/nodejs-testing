const assert = require('assert');
var basicMaths = require('../../src/numbers/basicMaths');

describe('Test', () => {
  it('should add 2 and return the total', () => {
    assert(4 === basicMaths.add(2, 2));
  })
})

describe('Test', () => {
  it('should subtract 2 and return the total', () => {
    assert(1 === basicMaths.subtract(3, 2));
  })
})