// takes two arrays and outputs the elements that are not common to both

function diffArray(arr1, arr2) {

  let result1 = arr2.filter(x => !arr1.includes(x));
  let result2 = arr1.filter(x => !arr2.includes(x));
  let newArr = result1.concat(result2);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));


// Alternative Solution

function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2).sort();

  newArr = newArr.filter((x) => newArr[x]!=newArr[x-1]&& x!=newArr[x+1]);

  return newArr;
}

