const assert = require('assert');
var basicMaths = require('../src/BasicMaths');

describe('Test', () => {
  it('should add 2 and return the total', () => {
    assert(4 === basicMaths.add(2, 2));
  })
})