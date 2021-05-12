/*
When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
*/
/*
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);  will return 	3
*/
function lastIndexOf(arrayCheck, numberCheck) {
  let indexNumber = -1;
  for (let i = 0; i < arrayCheck.length; i++) {
    if (arrayCheck[i] === numberCheck) {
      indexNumber = i;
    }
  }
  return indexNumber;
}
/*
console.log(indexNumber); - will not work because indexnumber is IN the function. It is a local scope.
*/

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);