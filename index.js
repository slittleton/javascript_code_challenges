// Add All Numbers ============================================
// return the sum of all parameters entered
// number of parameters can be anything
// ex.  addAll(1,2) -> 3
// ex.  addAll(4,5,6,7) -> 22

function addAll() {
  let arr = [...arguments];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(addAll(1, 2, 3));
// console.log(addAll(1, 2, 3, 4));

// Sum All Primes ============================================
// pass in a number to loop up to and add all the prime numbers.
// prime number is a whole number greater than 1 whose only factors
// are 1 and itself
// sumAllPrimes(10) === 17

function sumAllPrimes(num) {
  let total = 0;
  let primes = [];

  function checkPrime(testNum) {
    if (testNum === 1) return false;
    if (testNum === 2) return true;

    for (let i = 2; i < testNum; i++) {
      if (testNum % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < num; i++) {
    if (checkPrime(i)) primes.push(i);
  }
  primes = primes.reduce((acc, cur) => acc + cur);

  return primes;
}

function sumAllPrimesV2(num) {
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
    .slice(2);
  for (let n in nums) {
    nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}

// console.log(sumAllPrimes(10)); // 17
console.log(sumAllPrimesV2(10)); // 17



// Seek and Destroy ============================================
// remove from the array whatever is in the following arguments
// ([2,3,4,6,6,'apple'], 2,6) -> [3,4,'apple']
function seekAndDestroy(){

}