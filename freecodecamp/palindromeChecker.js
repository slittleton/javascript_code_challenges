/*
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.

function palindorme() returns true if argument is a palindrome and false it if is not
*/

function palindrome(str) {
  let stripper = /\s|[_-]|\.|\,|(?=[A-Z])/g;
  let arr = str.toLowerCase().split(stripper).join('').split('');
  let pArr = []
  
  // Loop to reverse parenthesis direction
  for(var i = 0; i < arr.length; i++ ){
    if(arr[i] === ")" ){
      pArr.push("(");
    }else if(arr[i] === "(" ){
      pArr.push(")");
    }else{
      pArr.push(arr[i]);
    }
  };
  
  let cleanStr = arr.join('');
  let revStr = pArr.reverse().join('');
  
  if(cleanStr === revStr){
    return true;
  }else{
    return false;
  }
  
  }
  
  console.log(palindrome("eye")); //true
  console.log(palindrome("RacE C-AR")); //true
  console.log(palindrome("A man, a plan, a canal. Panama")); //true
  console.log(palindrome("My age is 0, 0 si ega ym.")); //true
  console.log(palindrome("0_0 (: /-\ :) 0-0")); //true