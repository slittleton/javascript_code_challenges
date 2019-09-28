// Returns the sum of all primes less than or equal to input number

function sumPrimes(num) {
  let primes = [];
  
  function primeTest(val){
    if(val === 1){
      return false;
    }else if(val === 2){
      return true;
    }else{
      for(var i = 2; i< val; i++){
        if(val % i === 0){
          return false;
        }
      }
      return true;
    }
  }
  for (var i = 1; i < num+1; i++){
    if(primeTest(i)){
      primes.push(i);
    }
  }
   let result = primes.reduce((acc, curVal)=>{
    return acc + curVal;
  })
   return result;
  }
  console.log(sumPrimes(10));
  console.log(sumPrimes(977));


  // Aleternate/Shortened version

  function sumPrimes(num) {
    let primeSum = 0;
  
    for (var i = 2; i <= num; i++){
      for(var j = 2; j <= i; j++){``
        if(i===j){ primeSum += i;}
         if(i%j===0){ break;}
      } 
    }
    return primeSum;
    }
  
    console.log(sumPrimes(10));