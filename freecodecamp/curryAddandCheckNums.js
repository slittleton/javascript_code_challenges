/*
returns two numbers added together. If any argument is not a number, returns undefined.
If given only one argument, tests to see if argument is number and returns curry function
if argument is number else returns undefined

*/


function addTogether(){
  function checkIfNum(x){
    if (typeof(x) !== "number"){
      return undefined;
    }else{
      return x;
    }
  }

  if (arguments.length > 1){
   let p1 = checkIfNum(arguments[0]);
   let p2 = checkIfNum(arguments[1]);
   if(p1 === undefined || p2 === undefined){
     return undefined;
   }else{
     return p1 + p2;
   }

  }else{
    let p1 = checkIfNum(arguments[0]);
    if(p1 !== undefined){
      return function(b){
        let p2 = checkIfNum(b);
        if(p2 !== undefined){
          return p1 + p2;
        }
      }
    }
  }
}

console.log(addTogether(2,3)); //returns 5
console.log(addTogether(2,[3])); //returns undefined
let myVar = addTogether(4); //returns function that will take additional number as parameter
console.log(myVar(5)); // returns 9
