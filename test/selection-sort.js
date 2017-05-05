/* eslint no-undef: 0 */

const assert = require('assert');
const selectionSort = require('../selection-sort/selection-sort');

describe('Selction sort', () => {
  it('should return a sorted array', () => {
    assert.deepEqual(selectionSort([100, 2, 10, 1, 5]), [1, 2, 5, 10, 100]);
    assert.deepEqual(selectionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(selectionSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(selectionSort([1]), [1]);
    assert.deepEqual(selectionSort([2, 1]), [1, 2]);
  });

  it('should return empty array if input is an empty array', () => {
    assert.deepEqual(selectionSort([]), []);
  });
});
