const assert = require('assert');
var compoundMaths = require('../src/compoundMaths');

describe('Test', () => {
  it('should add 3 numbers and return the total', () => {
    assert(6 === compoundMaths.add(1,2,3));
  })
})