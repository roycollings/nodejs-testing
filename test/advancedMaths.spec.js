const assert = require('assert');
var advancedMaths = require('../src/advancedMaths');

describe('Test', () => {
  it('should multiply 2 and return the total', () => {
    assert(4 === advancedMaths.multiply(2, 2));
  })
})