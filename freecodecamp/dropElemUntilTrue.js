/*
Returns a portion of the array once the condition specified by the callback is satisfied, 
otherwise, array parameter should be returned as an empty array.
 */

function dropElements(arr, func) {
  // Drop them elements.
  let results = [];
  let x = null;

  for (var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      x = i;
      break
    }
  }

  if(x === null){
    results = [];
  }else{
    results = arr.slice(x,)
  }

return (results);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})) //[3,4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); //[1,0,1]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //[]

