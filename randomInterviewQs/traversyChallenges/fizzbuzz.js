// FizzBuzz
// if number is multiple of 3 print "Fizz"
// if number is multiple of 5 print "Buzz"
// if number is multiple of 3 and 5 print "FizzBuzz"

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
}
console.log(fizzBuzz(39));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));