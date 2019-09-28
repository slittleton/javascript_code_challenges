// takes a number and converts it to a roman numeral

function convertToRoman(num) {
  let romans1 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let romans2 = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];
  let romans3 = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];

  let arr = num.toString().split('').reverse();
  arr = arr.map((x)=> Number(x));

  arr[0]= (romans1[arr[0]-1])
  arr[1]= (romans2[arr[1]-1])
  arr[2]= (romans3[arr[2]-1])

  for(var i = arr.length; i > 0 ; i--){
    if(i > 2){
      arr[i] = "M".repeat(arr[i]);
    }
  }

  let converted = arr.reverse().join('');
  return converted;

 }
 
 console.log(convertToRoman(4567));