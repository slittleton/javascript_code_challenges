// Converts a string to  Pig-latin

function translatePigLatin(str) {

  let consonant = /^[b-df-hj-np-tv-z]+/;
  let vowel = /[aeiou]+/;
  let arr = str.split('');
  let newArr = []

  if(vowel.test(arr[0])){
    str = str + "way";
    return str;
  }else if(consonant.test(str[0])){
    for(var i = 0;i < arr.length; i++){
      if(consonant.test(arr[i])){
        newArr.push(arr[i]);  
      }
      if(vowel.test(arr[i])){
        break;
      }
    }
    arr.splice(0, newArr.length,);
    arr.push(newArr.join(''));
    arr.push("ay")
    str = arr.join('');
    return str;
  } 

  }


console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("apple"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("cbnm"));