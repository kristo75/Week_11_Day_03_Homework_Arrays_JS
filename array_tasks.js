const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
  },

// https://stackoverflow.com/questions/19645186/square-each-number-in-an-array-in-javascript
  // function (arr) {
  //   return arr.map(function (x) {
  //     return Math.pow(x, 2);
  //   });
  // }

  square: function (arr) {
    return arr.map( function (number) {
      return Math.pow(number, 2);
    });
  }

  // sum: function (arr) {
  //     const total = arr.reduce(function(runningTotal, number){
  //     return runningTotal + number;
  //     }, 0)
  //
  //     return total;
  //   },



	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
