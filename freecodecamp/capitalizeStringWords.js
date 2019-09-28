// Capitalize the first letter of each word in a string

function titleCase(str) {
  
  str = str.toLowerCase();

  let capStr = str.split(" ");
  
  for(let i = 0; i < capStr.length; i++){
    capStr[i] = capStr[i][0].toUpperCase() + capStr[i].substr(1);
    
  }
  

  str = capStr.join(" ");
  return str;
}

titleCase("I'm a little tea pot");



console.log(titleCase("i'm a little tea pot"));
console.log(titleCase("i'm a lITTLE tea POT"));