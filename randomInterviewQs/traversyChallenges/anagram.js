

// Anagram ===========================================
// if argument1 has the same characters as argument2
// with the same frequency of those characters then return true
// if the second argument has extra characters not found
// in the first argument that is ok
// make function case insensitive
// ex. 'elbow', 'below' -> true
// ex. 'elbow', 'below##pp2qpp' -> true

function isAnagram(str1, str2) {
  let chars1 = {};
  let chars2 = {};
  str1 = str1.toLowerCase().split("");
  str2 = str2.toLowerCase().split("");

  for (let i = 0; i < str1.length; i++) {
    chars1[str1[i]] ? chars1[str1[i]]++ : (chars1[str1[i]] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    chars2[str2[i]] ? chars2[str2[i]]++ : (chars2[str2[i]] = 1);
  }
  for (let prop in chars1) {
    if (!chars2[prop] || chars2[prop] < chars1[prop]) return false;
  }

  return true;
}
// alternate solution to isAnagram
// this solutin doesn't allow extra letters in str2
function isAnagram2(str1, str2) {
  function formatStr(str) {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  str1 = formatStr(str1);
  str2 = formatStr(str2);
  if (str1 === str2) return true;
  return false;
}
console.log(isAnagram("elbow", "below")); //true
// console.log(isAnagram("elbow", "bELow")); //true
// console.log(isAnagram("elbowe", "below")); //false
// console.log(isAnagram("elbowe", "beloweeeee")); //true