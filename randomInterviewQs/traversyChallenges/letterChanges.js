//Letter Changes ==========================================
//
// change every letter of the string to the one that follows it
// and capitalize the vowels
// z should turn to A

function letterChanges(str) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let str2 = [];
  str = str.toLowerCase().split("");

  for (let i = 0; i < str.length; i++) {
    let temp = alpha.indexOf(str[i]);
    if (temp === 25) {
      str2.push("A");
    } else {
      if (
        alpha[temp + 1] === "e" ||
        alpha[temp + 1] === "i" ||
        alpha[temp + 1] === "o" ||
        alpha[temp + 1] === "u"
      ) {
        str2.push(alpha[temp + 1].toUpperCase());
      } else {
        str2.push(alpha[temp + 1]);
      }
    }
  }

  return str2.join("");
}

console.log(letterChanges("axyzu"));
console.log(letterChanges("bird"));
