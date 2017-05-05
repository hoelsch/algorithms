/* eslint no-param-reassign: 0 */

/**
 * Partitions the array according to the pivot element:
 * - items smaller equal than the pivot become before the pivot
 * - items larger than the pivot become after the pivot
 *
 * @param {(Number[]|String[])} array - (Sub-)Array that should be sorted
 * @param {Number} startPos - Index of the beginning of the (sub-)array
 * @param {Number} endPos - Index of the end of the (sub-)array
 * @returns {Number} - Index of the pivot element
 */
function partition(array, startPos, endPos) {
  /**
   * take first element of (sub-)array as pivot (however, there are several
   * other strategies for choosing a pivot element).
   */
  const pivot = array[startPos];
  let leftPos = startPos - 1;
  let rightPos = endPos + 1;

  // move leftPos to the right and rightPos to the left until they cross each other
  while (true) {
    do {
      leftPos += 1;
    } while (array[leftPos] < pivot);

    do {
      rightPos -= 1;
    } while (array[rightPos] > pivot);

    // leftPos and rightPos cross each other, so we are done and can return rightPos as pivot index
    if (leftPos >= rightPos) {
      return rightPos;
    }

    // swap array[leftPos] with array[rightPos]
    const temp = array[leftPos];
    array[leftPos] = array[rightPos];
    array[rightPos] = temp;
  }
}

/**
 * Sorts the given array using the Quicksort algorithm.
 *
 * Worst-case time complexity: O(n^2)
 * Average-case time complexity: O(n * log n)
 * Best-case time complexity: O(n * log n)
 *
 * @param {(Number[]|String[])} array - Array that should be sorted
 * @returns {(Number[]|String[])} - Sorted array
 */
function quicksort(array, startPos = 0, endPos = array.length - 1) {
  // only if startPos is smaller than endPos, we can further partition the (sub-)array
  if (startPos < endPos) {
    // partition array according to a pivot element
    const pivotPos = partition(array, startPos, endPos);

    // recursively call quicksort for left and right partition
    quicksort(array, startPos, pivotPos);
    quicksort(array, pivotPos + 1, endPos);
  }

  return array;
}

module.exports = quicksort;
