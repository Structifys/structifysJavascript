/**
 ** Selection Sort implement
 *@author Javier Paez
 */

/**
 * @param {[]} array the array that we going to iterate
 * @param {Number} firstIndex index of value change
 * @param {Number} secondIndex index of value change
 *
 * @returns  the new  array with first Index and Second Index changed
 */
const Swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  return array;
};

/**
 *
 * @param {[]} array the array that we going to iterate
 * @param {Number} stardIndex the start index to iterate from there
 *
 * @returns the index of mininum value
 */
const indexOfMininum = (array, stardIndex) => {
  let minValue = array[stardIndex];
  let minIndex = stardIndex;

  for (let i = stardIndex + 1; i <= array.length - 1; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i
    }
  }

  return minIndex;
};
/**
 * 
 * @param {[]} array  the array that we going to iterate
 * 
 * @returns new array sorted
 */
const SelectionSort = array => {
  let minIndex;
  for (let index in array) {
    minIndex = indexOfMininum(array, parseInt(index));
    array = Swap(array, parseInt(index), minIndex);
  }

  return array;
};

module.exports = {
  SelectionSort
};
