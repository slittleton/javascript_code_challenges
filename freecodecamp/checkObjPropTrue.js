// Returns true if propety value of object is true, else returns false


function truthCheck(collection, pre) {
  let boo = null;

  for(let k in collection){
     if(Boolean(collection[k][pre]) === false){
      boo = false;
      break
     }else{
       boo = true;
     }
    }
    return boo;
  }


  

console.log(truthCheck([{"user": "Tinky-Winky", "sex": ""}, 
            {"user": "Dipsy", "sex": "male"}, 
            {"user": "Laa-Laa", "sex": "female"}, 
            {"user": "Po", "sex": "female"}], "sex"));

