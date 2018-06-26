const assert = require('assert');
var stringJoiner = require('../../src/strings/stringJoiner');

describe('Concat', () => {
  it('should concatenate the two strings and return the total', () => {
    assert('hello there' === stringJoiner.concat('hello', 'there'));
  })
})
