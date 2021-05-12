function merge(arrayOne,arrayTwo) {
  let newArray = []; // for arrays concatenate
  // will receive a new array from two arrays
  for (let i = 0; i < arrayOne.length; i++) {
    newArray[i] = arrayOne[i];
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    newArray[arrayOne.length + j] = arrayTwo[j];
  }
  // received a new array from two arrays
  // will sort the new array from the smallest to the biggest number
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if(newArray[i] > newArray[j]) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }
  return newArray;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);