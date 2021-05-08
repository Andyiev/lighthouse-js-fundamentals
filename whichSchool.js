/*
 This code should help learners decide which school they should attend.
 Elementary School if age is below 13
 Secondary School if age is between 13 and 18 (both inclusive)
 Lighthouse Labs in all other cases.
*/
let age = 15;
const whichSchool = function(age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }

}

console.log("I am " + age + ". Which school should I go to?");
console.log(whichSchool(age));
//console.log("I am 8. Which school should I go to?");
//console.log(whichSchool(8));
//console.log("I am 14. Which school should I go to?");
//console.log(whichSchool(14));