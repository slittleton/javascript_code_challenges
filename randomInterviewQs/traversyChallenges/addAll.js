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
