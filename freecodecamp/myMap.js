Array.prototype.myMap = function(callback){
  var newArray = [];

  for(var i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }

  return newArray;

};