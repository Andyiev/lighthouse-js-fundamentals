/*
The task is

    Loop through the numbers 1 to 20
    If the number is divisible by 3, print "Julia"
    If the number is divisible by 5, print "James"
    If the number is divisible by 3 and 5, print "JuliaJames"
    If the number is not divisible by 3 or 5, print the number
*/
/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
let x = 1;

while (x <= 20) {
  if (x % 5 === 0 && x % 3 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James"); 
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  
  x += 1;
  /* your stop condition goes here */ 
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
}
