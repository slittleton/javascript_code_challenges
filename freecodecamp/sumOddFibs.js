
/*Given a positive integer num, returns the 
sum of all odd Fibonacci numbers that are less than 
or equal to num */


function sumOddFibs(num) {
  let x = 1;
  let arr = [1]
  let oddArr = [1,1];
  let result = 0;
  
  for(var i = 0; i < num; i++){
    arr.push(x);
    x = x +(arr[i]);
    oddArr = arr.filter(function(y){return y % 2 != 0;})
    if (x > num){break;}
  }
  
  for(var i = 0; oddArr[i] <= num; i++){
    if(result >= num){break;}
    result = oddArr[i] + result;
  }
    return result;
  }

console.log(sumOddFibs(10));
console.log(sumOddFibs(75025));