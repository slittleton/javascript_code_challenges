
/*
I made this to help show how a callback works with replace.
A regular expression can be broken into groups with ()
Each group can be used in a callback function. The callback function is
the second paramater of replace in these examples. 
of replace. 

*/

let digitsReg = /(\d{1})(\d{2})(\d{3})/g;
let myNums = "122333455666";
let myLetters = "aaBBBcccc"
let lettersReg = /(\w)([A-Z]{3})(\w{4})/;

// the callback function used by replace in showGroups()
function callback(match, group1, group2, group3){
  console.log(group1);
  console.log(group2);
  console.log(group3);
}

function showGroups(str, regEx) {
  return str.replace(regEx, callback);
} 


showGroups(myNums, digitsReg);
showGroups(myLetters, lettersReg);






// Replace can also use objects in its callback


let mystr = "a bat cat";
let things = {"a": "A", "b": "B", "c": "C"};

function matcher(match){return things[match]};

let y =  mystr.replace(/[abc]/g,function (match){return things[match]});

let myRegEx = /[abc]/g;
let z =  mystr.replace(myRegEx, matcher);

console.log(y);
console.log(z);
