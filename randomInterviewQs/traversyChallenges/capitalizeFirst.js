

// Capitalize Letters ================================
// Capitalize first leter of each word
function capitalizeLetters(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    let letter = str[i][0].toUpperCase();
    str[i] = str[i].substr(1);
    str[i] = letter + str[i];
  }

  return str.join(" ");
}

// alternate solution
function capitalizeLetters2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

console.log(capitalizeLetters("capitlize the first letter of each word."));
