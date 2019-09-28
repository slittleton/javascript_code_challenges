// Factorialization


// function factorialize(num) {
//   if (num === 0){
//     return 1;
//   }else if (num < 0) {
//     return "unacceptable number";
//   }else {
//    num = (num * factorialize(num-1));
//   }
//   return num;
// }


var arr = [];
function factorialize(num) {
  
  if(num === 0){
    return 1;
  }else if (num < 0) {
        return "unacceptable number";
      }else {
        for(var i = 0; i < num; i++){
          arr.push(Number(i+1));
        }
        var num = arr.reduce(function(result, item){
          return result * item;
        }, 1);
      }
      return num;
}



console.log(factorialize(3));

