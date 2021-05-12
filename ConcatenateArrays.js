let arrayOne = [];
let arrayTwo = [];
function concat(arrayOne,arrayTwo) {
  let newArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    newArray[i] = arrayOne[i];
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    newArray[arrayOne.length + j] = arrayTwo[j];
  }
  return newArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);