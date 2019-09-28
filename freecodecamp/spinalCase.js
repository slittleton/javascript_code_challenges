// Converts a string to Spinal Case (a "-" between each word)

function spinalCase(str) {
  let stripper = /\s|[_-]|(?=[A-Z])/g;
  let arr = str.split(stripper);
  str = arr.join("-");
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));


// Converts string to spinal case with all lowercase words
function spinalCase(str) {
  let stripper = /\s|[_-]|(?=[A-Z])/g;
  let arr = str.split(stripper);
  str = arr.join("-").toLowerCase();
  return str;
}