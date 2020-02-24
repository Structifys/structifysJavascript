/**
 ** Binary search Imlementation
 *@author Javier Paez
 */

/**
 *
 * @param {[]} array the matrix that  we will iterate
 * @param {Number} targetValue the value to search in the array
 *
 *
 * @returns the index of targetValue or -1 if the item not in the array
 */
const BinarySearch = (array, targetValue) => {
  let min = 0;
  let max = array.length - 1;
  let middle;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (array[middle] === targetValue) {
      return middle;
    }

    if (array[middle] > targetValue) {
      max = middle - 1;
    } else if (array[middle] < targetValue) {
      min = middle + 1;
    }
  }
  return -1;
};

module.exports = {
  BinarySearch
};
