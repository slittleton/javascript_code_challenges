
// Takes an array of two numbers, sorts it from low to high
// Then it sums all the integers starting at the lowest number
// in the array all the way tot he highest number in the arr
// ex [1,3] = 1+2+3 = 6

function sumAll(arr) {
  let arrSorted = arr.sort((a,b)=> a-b);
  let total = 0

  for(var i = (arrSorted[0]); i <= (arrSorted[arrSorted.length-1]); i++){
    total += i;
  }
  return total;
  
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

