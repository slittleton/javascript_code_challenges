
// Max Character
// return the character that is most common in a string
function maxCharacter(str) {
  let chars = {};
  let max = 0;
  let maxChar = null;

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    chars[str[i]] ? chars[str[i]]++ : (chars[str[i]] = 1);
  }
  for (let prop in chars) {
    if (chars[prop] > max) {
      max = chars[prop];
      maxChar = prop;
    }
  }

  return maxChar;
}
console.log(maxCharacter("aabcccd"));