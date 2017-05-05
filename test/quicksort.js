/* eslint no-undef: 0 */

const assert = require('assert');
const quicksort = require('../quicksort/quicksort');

describe('Quicksort', () => {
  it('should return a sorted array', () => {
    assert.deepEqual(quicksort([100, 2, 10, 1, 5]), [1, 2, 5, 10, 100]);
    assert.deepEqual(quicksort([100, 2, 10, 1, 5, 100]), [1, 2, 5, 10, 100, 100]);
    assert.deepEqual(quicksort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(quicksort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(quicksort([1]), [1]);
    assert.deepEqual(quicksort([2, 1]), [1, 2]);
  });

  it('should return empty array if input is an empty array', () => {
    assert.deepEqual(quicksort([]), []);
  });
});
