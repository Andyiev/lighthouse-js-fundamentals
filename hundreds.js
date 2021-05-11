let numberOfHundreds = 0;
const howManyHundreds = function(number) {
  numberOfHundreds = (number - (number % 100)) / 100;
  return numberOfHundreds;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
