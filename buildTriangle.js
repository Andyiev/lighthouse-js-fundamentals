// Declare variables 
// Take the number of asterisks for the bace

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function buildTriangle(number) {
  let raw = "";
  for (let i = 1; i <= number; i++) {
    //length = i;
    raw = raw + makeLine(i);
  }
  return raw;
}

function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
console.log(buildTriangle(10));