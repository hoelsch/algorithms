/* eslint no-param-reassign: 0 */

/**
 * Sorts the given array using the selection-sort algorithm.
 *
 * Worst-case time complexity: O(n^2)
 * Average-case time complexity: O(n^2)
 * Best-case time complexity: O(n^2)
 *
 * @param {(Number[]|String[])} array - Array that should be sorted
 * @returns {(Number[]|String[])} - Sorted array
 */
function selectionSort(array) {
  for (
    let leftmostUnsortedItemPos = 0;
    leftmostUnsortedItemPos < array.length - 1;
    leftmostUnsortedItemPos += 1
  ) {
    let minItemPos = leftmostUnsortedItemPos;

    // iterate over all itmes occuring after the leftmost unsorted item and
    // find the smallest one and swap it with the leftmost unsorted item
    for (let i = leftmostUnsortedItemPos + 1; i < array.length; i += 1) {
      if (array[i] < array[minItemPos]) {
        minItemPos = i;
      }
    }

    if (minItemPos !== leftmostUnsortedItemPos) {
      // swap smallest item with leftmost unsorted item
      const temp = array[leftmostUnsortedItemPos];
      array[leftmostUnsortedItemPos] = array[minItemPos];
      array[minItemPos] = temp;
    }
  }

  return array;
}

module.exports = selectionSort;
