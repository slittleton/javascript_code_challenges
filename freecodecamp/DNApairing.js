// given a str of the 4 types of DNA bases, pairElement returns
// an array of base pair arrays

function pairElement(str) {
  let arr = [];
    for(var i = 0; i< str.length; i++){
      if(str[i] == "A"){
        arr.push(['A','T']);
      }else if(str[i] == "T"){
        arr.push(['T','A']);
      }else if(str[i] == "G"){
        arr.push(['G','C']);
      }else if(str[i] == "C"){
        arr.push(['C','G']);
      }
    }
    str = arr;
    return str;
  }

  console.log(pairElement("GCGAT"));