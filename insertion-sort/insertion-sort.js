/* eslint no-param-reassign: 0 */

/**
 * Sorts the given array using the insertion sort algorithm.
 *
 * Worst-case time complexity: O(n^2)
 * Average-case time complexity: O(n^2)
 * Best-case time complexity: O(n)
 *
 * @param {(Number[]|String[])} array - Array that should be sorted
 * @returns {(Number[]|String[])} - Sorted array
 */
function insertionSort(array) {
  /**
   * iterate over the array starting at the second position
   * because items are swapped with previous items if they are smaller
   */
  for (let i = 1; i < array.length; i += 1) {
    /**
     * the variable j is used to traverse the sorted part of the array
     * backwards to find the correct position of the unsorted item located at array[i]
     */
    let j = i - 1;

    // cache current unsorted item
    const unsortedItem = array[i];

    /**
     * if an already sorted item is larger than the current unsorted item,
     * we have to move the sorted item one position to the right.
     */
    while (j >= 0 && array[j] > unsortedItem) {
      array[j + 1] = array[j];
      j -= 1;
    }

    // now we can insert our item at the correct position in our sorted part of the array
    array[j + 1] = unsortedItem;
  }

  return array;
}

module.exports = insertionSort;
