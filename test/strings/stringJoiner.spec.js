const assert = require('assert');
var stringJoiner = require('../../src/strings/stringJoiner');

describe('stringJoiner.Concat', () => {
  it('concatenates the two strings and return the total', () => {
    assert('hello-there' === stringJoiner.concat('-', 'hello', 'there'));
  })
})
