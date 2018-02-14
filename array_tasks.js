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
    const newArray = arr.map( function (number) {
      return Math.pow(number, 2);
    });
    return newArray;
  },

  sum: function (arr) {
    return arr.reduce( function (runningTotal, currentItem) {
      return runningTotal + currentItem;
    }, 0);
  },

  // removeAndClone: function (arr, valueToRemove) {

  // },

  findIndexesOf: function (arr, itemToFind) {
    const indexArray = [];
    arr.forEach(function(number, index){
      if(number === itemToFind){
        indexArray.push(index);
      }
    });
    return indexArray;
  },

  // sumOfAllEvenNumbersSquared: function (arr) {
  //   const filteredArray = arr.filter(function(number){
  //     return number % 2 === 0;
  //   });
  //   return filteredArray;
  // }



  // ----------- EXTENSION ------------

  // findDuplicates: function (arr) {

  // },

}

module.exports = arrayTasks
