const assert = require('assert');
const stringSplitter = require('../../src/strings/stringSplitter');

describe('stringSplitter.splitToArray', () => {
    it('Returns an array object', () => {
        let result = stringSplitter.splitToArray('hello there mate', ' ');
        assert(Array.isArray(result));
    });

    it('Returns the correct number of elements', () => {
        let result = stringSplitter.splitToArray('hello there mate', ' ');
        assert(3 === result.length);
    });
});