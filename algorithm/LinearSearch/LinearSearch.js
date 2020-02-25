/**
 ** Linear Search implementation
 *@author Javier Paez
 */

const LinearSearch = (array, targetValue) => {
  for (let index in array) {
    if (array[index] == targetValue) {
      return index;
    } else {
      return -1;
    }
  }
};

module.exports = {
  LinearSearch
};
