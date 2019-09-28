// Simple OOP constructor for first and last names

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var arr = firstAndLast.split(" ");

  this.getFirstName = function(){
    return arr[0];
  }
  this.getLastName = function(){
    return arr[1];
  }
  this.setFirstName = function(first){
    arr[0] = first;
  };
  this.setLastName = function(last){
    arr[1] = last;
  }
  this.setFullName = function (fullname){
    let arrFull = fullname.split(" ");
    arr[0] = arrFull[0] ;
    arr[1] = arrFull[1] ;
  }
  this.getFullName = function() {
    return arr[0] + " " + arr[1];
  };
  return firstAndLast;
};

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.setFirstName("Robert"));
console.log(bob.getFirstName());
console.log(bob.setFullName("John Smith"));