
/*
Finds the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.
*/


function smallestCommons(arr) {
  let boo = true;
  let ar = arr.sort(function(a, b){return a - b});
  let count = 0;

  while(boo){
    count++;
    for(var j = ar[0]; j<=ar[1]; j++){
      if(count % j !==0){
        break;
      }else if(j === ar[1]){
        boo = false;
      }
    }
  }
  return count;
}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));



// Alternate Solution

function smallestCommons(arr) {
  let ar = arr.sort(function(a, b){return a - b});
  let min = ar[0];
  let max = ar[1]
  let start = max;

  for(var i = max; i>=min; i--){
    if(start % i !==0){
      start+= max;
      i = max;
    }
  }
  return start;
}


console.log(smallestCommons([1,5]));