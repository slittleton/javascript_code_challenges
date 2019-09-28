// Replaces the word in a string with another word and maintains 
// the first letter as a capital letter if it was originally Capitalized

function myReplace(str, before, after) {
  let cap = /^[A-Z]/;

  if(cap.test(before[0])){
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  }

  return str.replace(before, after);

}

