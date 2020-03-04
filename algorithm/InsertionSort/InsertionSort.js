/**
 ** Insertion Sort implementation
 * @author Javier paez
 */

/**
 *
 * @param {[]} array the array that we going to iterate
 * @param {Number} rightIndex the index of element behind to key
 * @param {Number} key the element that we going to insert
 */
const Insert = (array, rightIndex, key) => {
  for (var i = rightIndex; i >= 0 && array[i] > key; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = key;

  return array;
};

/**
 *
 * @param {[]} array the array that we going to iterate
 * @returns new array sorted or -1 if array is empty
 */
const InsertionSort = array => {
  if (array.length === 0) return -1;
  for (var i = 1; i <= array.length - 1; i++) {
    array = Insert(array, i - 1, array[i]);
  }
  return array;
};
// var insert = function(array, rightIndex, value) {
//     for(var j = rightIndex;
//         j >= 0 && array[j] > value;
//         j--) {
//         array[j + 1] = array[j];
//     }   
//     array[j + 1] = value; 
//     return array;
// };

// var InsertionSort = function(array) {
//     for(var i = 1; i <= array.length -1;i++){
//       array = insert(array,i - 1,array[i]);
//     }
    
//     return array;
// };
module.exports = {
  InsertionSort
};
