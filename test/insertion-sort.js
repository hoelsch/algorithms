/* eslint no-undef: 0 */

const assert = require('assert');
const insertionSort = require('../insertion-sort/insertion-sort');

describe('Insertion sort', () => {
  it('should return a sorted array', () => {
    assert.deepEqual(insertionSort([100, 2, 10, 1, 5]), [1, 2, 5, 10, 100]);
    assert.deepEqual(insertionSort([100, 2, 10, 1, 5, 100]), [1, 2, 5, 10, 100, 100]);
    assert.deepEqual(insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(insertionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(insertionSort([1]), [1]);
    assert.deepEqual(insertionSort([2, 1]), [1, 2]);
  });

  it('should return empty array if input is an empty array', () => {
    assert.deepEqual(insertionSort([]), []);
  });
});
