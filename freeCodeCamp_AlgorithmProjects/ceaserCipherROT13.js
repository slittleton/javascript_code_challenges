/*
Caesars Cipher ---- ROT13 cipher, where the 
values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' 
and so on.

Takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase.

 */

function rot13(str) {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let abc = a.split(''); //alphabet array
  let upStr = str.toUpperCase();
  let arr = upStr.split(''); //coded message array
  let cipher = abc.slice(13,).concat(abc.slice(0,13)); //cipher array
  let numArr = [] //array with numbers corresponding to letter position for cipher
  let newArr = [] // array of translated message

  for(var i = 0; i < arr.length; i++){
    if(arr[i].match(/\w/)){
      let indxNum = cipher.indexOf(arr[i]);
      numArr.push(indxNum.toString())
    }else{
      numArr.push(arr[i]);
    }
  }

  for(var i = 0; i < numArr.length; i++){
    if(numArr[i].match(/[0-9]/)){
      let alpha = abc[Number(numArr[i])];
      newArr.push(alpha)
    }else{
      newArr.push(numArr[i]);
    }
  }

  let translated = newArr.join('');
  return translated;
}


console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP