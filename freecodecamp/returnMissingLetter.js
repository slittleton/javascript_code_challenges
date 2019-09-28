// Returns a lowercase letter missing from the alphabet
// If no letter is missing, returns undefined

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let begin = alphabet.indexOf(str[0]);
  let end = Number(alphabet.indexOf(str[str.length-1])) + 1;
  let fixedPiece = alphabet.slice(begin, end);

  fixedPiece = fixedPiece.split('');
  str = str.split('');
  
  let newStr = fixedPiece.filter((x) => !str.includes(x));
  if (newStr == ''){
    newStr = undefined;
  }else{
    return newStr.join('');
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("abcdefhijk"));