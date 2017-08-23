function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  if(age >= 0) {
    return name + " is " + age + " years old."
  }
  else {
    return name + " hasn't been born yet!";
  }
}

console.log(ageCalculator("Miranda", 1983, 2017));
console.log(ageCalculator("Ferdinand", 1988, 2017));
console.log(ageCalculator("Jean-Luc Picard", 2305, 2017));