/**
 * Performs a binary search on the given array and returns
 * the position in the array in which the target element
 * is contained.
 *
 * Finds the target element in O(log n), where n is the number of
 * elements in the array. However, binary search is only efficient
 * with random access (e.g. not suitable for a linked list).
 *
 * @param {(Number|String)} element - The target element
 * @param {(Number[]|String[])} values - Sorted array of elements
 * @returns {Number} - Position of the target element in the array;
 * if the element is not contained, -1 is returned
 */
function binarySearch(element, values) {
  let startPos = 0;
  let endPos = values.length - 1;

  while (startPos <= endPos) {
    // position of the element in the middle of the current (sub-)array
    const midPos = startPos + Math.floor((endPos - startPos) / 2);

    if (values[midPos] === element) {
      return midPos;
    } else if (element > values[midPos]) {
      /**
       * the target element is larger than the mid element
       * --> search in the right half
       */
      startPos = midPos + 1;
    } else {
      /**
       * the target element is smaller than the mid element
       * --> search in the left half
       */
      endPos = midPos - 1;
    }
  }

  // elmement was not found
  return -1;
}

module.exports = binarySearch;
