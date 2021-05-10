// Here is the function for the main code
function sumLargestNumbers(arrayOne) {
let numOne = 0; // for first max number loop
let numTwo = 0; // for first max number loop
let numThree = 0; // for second max number loop
let numFour = 0; // for second max number loop
let busyInd = 0; // to exclude firsy max number loop number 
  for (i = 0; i < arrayOne.length; i++) {
    numOne = arrayOne[i];
//  console.log("Array index =" + i);
    if (numOne > numTwo) {
    numTwo = numOne;
//    console.log(numTwo); just to check myself
//    console.log(numOne); just to check myself
    busyInd = i;
    }
  }
  for (j = 0; j < arrayOne.length; j++) {
  numThree = arrayOne[j];
    if (j !== busyInd) {
      if (numThree > numFour) {
         numFour = numThree;
      }
    }
  }
return numTwo + numFour;
}
// Main code
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));