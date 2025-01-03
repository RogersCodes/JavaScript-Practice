//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattennedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
console.log(flattennedArray);