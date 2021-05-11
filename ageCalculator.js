let name = "";
let currentYear = 0;
let yearOfBirth = 0;
const ageCalculator = function(name,yearOfBirth,currentYear) {
  let differentInYears = currentYear - yearOfBirth;
  return name + " is " + differentInYears + " years old.";
};
console.log(ageCalculator("Miranda", 1983, 2021));
console.log(ageCalculator("Ferdinand", 1988, 2021));