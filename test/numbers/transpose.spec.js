const assert = require('assert');
const transpose = require('../../src/numbers/transpose');

describe('transpose.getNumberAsWords', () => {
    it('returns an array', () => {
        let result = transpose.getNumberAsWords(123);
        assert(Array.isArray(result));
    });

    it('returns the correct words in the correct order', () => {
        let result = transpose.getNumberAsWords(123);
        assert('one,two,three' === result.toString());
    });
});