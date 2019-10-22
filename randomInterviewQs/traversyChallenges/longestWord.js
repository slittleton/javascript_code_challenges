// Longest Word ======================================
// return longest word of a string
function longestWord(sen) {
  sen = sen.split(" ");
  let longest = null;
  let count = 0;

  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > count) {
      count = sen[i].length;
      longest = sen[i];
    }
  }
  return longest;
}
console.log(longestWord("return longest word of a string"));