
/**
 * recurSum Recursion
 * Write a recursive function, sum(arr, n), that returns the
 * sum of the elements from 0 to n inclusive in an array arr.
 */

function recurSum(arr, n) {
  total = 0;
  n = n - 1;
  function helper(ar, num) {
    if (num < 0) {
      return total;
    } else {
      return (total = helper(ar, num - 1) + ar[num]);
    }
  }

  helper(arr, n);
  return total;
}

// Version 2
function sumV2(arr, n) {
  if (n <= 0) return arr[0];
  return sumV2(arr, n - 1) + arr[n];
}

console.log(sum([1, 2, 3, 4], 3));
console.log(sum([1], 0))
console.log(sum([2, 3, 4], 1))

/**
 * rangeOfNumbers - Recursion
 * We have defined a function named rangeOfNumbers with two parameters.
 * The function should return an array of integers which begins with a
 * number represented by the startNum parameter and ends with a number
 * represented by the endNum parameter. The starting number will always be
 * less than or equal to the ending number. Your function must use recursion
 *  by calling itself and not use loops of any kind. It should also work for
 * cases where both startNum and endNum are the same.
 */
function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1);
    numbers.push(n);
    return numbers;
  }
}
console.log(count(3)); //[1,2,3]

function rangeOfNumbers(startNum, endNum) {
  if (endNum === startNum) {
    return [startNum];
  } else {
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

console.log(rangeOfNumbers(3, 6)); //[3,4,5,6]

/**
 * We have defined a function called countdown with two parameters.
 * The function should take an array in the myArray parameter and
 * append the numbers n through 1 based on the n parameter.
 *
 * For example, calling this function with n = 5 will pad
 * the array with the numbers [5, 4, 3, 2, 1] inside of it.
 * Your function must use recursion by calling itself and must
 * not use loops of any kind.
 */

function countdown(myArray, n) {
  if (n === -1) return myArray;

  if (n === 1) {
    myArray.unshift(1);
    return myArray;
  } else {
    countdown(myArray, n - 1);
    myArray.unshift(n);
    return myArray;
  }
}

console.log(countdown([], 5));
