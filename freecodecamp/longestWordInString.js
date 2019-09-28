function findLongestWordLength(str) {
  let longest = '';
  let arr = str.split(" ");
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  str = longest.length;
  return `The longest word is ${str} characters long, the word is ${longest}`;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));