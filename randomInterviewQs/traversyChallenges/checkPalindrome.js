// Check if Palindrome ============================
function isPalindrome(str) {
  str = str.toLowerCase();
  let str2 = str
    .split("")
    .reverse()
    .join("");

  if (str === str2) {
    return true;
  }
  return false;
}

console.log(isPalindrome("CaC"));
