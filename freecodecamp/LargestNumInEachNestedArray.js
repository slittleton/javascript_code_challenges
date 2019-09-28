function largestInEachNestedArray(arr) {
  // returns the largest number in each nested array of an array
  let biggest = 0;
  let tempArr = []

  for(let i = 0; i < arr.length; i++){
    let lowest = -1 * (arr[i].reduce((total, amount) => Math.abs(total)+ Math.abs(amount)));

    biggest = lowest;

    for(let j = 0; j < arr[i].length; j++){

      if(arr[i][j] > biggest){
        biggest = arr[i][j];
      }
    }
    tempArr.push(biggest);
  }
  arr = tempArr;
  return arr;
}

console.log(largestInEachNestedArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestInEachNestedArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestInEachNestedArray([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
