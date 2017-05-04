const assert = require('assert');
const binarySearch = require('../binary-search/binary-search');

describe('Binary Search', () => {
  it('should return correct position of the target element', () => {
    assert.equal(2, binarySearch(5, [0, 2, 5, 10, 100]));
    assert.equal(0, binarySearch(0, [0, 2, 5, 10, 100]));
    assert.equal(4, binarySearch(100, [0, 2, 5, 10, 100]));
    assert.equal(0, binarySearch(1, [1]));
    assert.equal(0, binarySearch(1, [1, 2]));
    assert.equal(0, binarySearch(1, [1, 1]));
    assert.equal(3, binarySearch('d', ['a', 'b', 'c', 'd', 'e', 'f']));
  });

  it('should return -1 if the target element is not contained in the array', () => {
    assert.equal(-1, binarySearch(1, [0, 2, 5, 10, 100]));
  });

  it('should return -1 if the array is empty', () => {
    assert.equal(-1, binarySearch(0, []));
  });
});
