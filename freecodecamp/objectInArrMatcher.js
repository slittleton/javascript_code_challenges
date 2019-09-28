// Returns array of objects that are a subset of an array of objects
// the returned array requires the source paramater's properties and values
// be contained in the collection parameter's object

function whatIsInAName(collection, source) {

  var arr = collection.filter(
    function(prop){
      for(var i in source){
        if(source[i]!=prop[i]){
          return false;
        }
      }
    return true;
    }
  );
  return arr;
}

// console.log(whatIsInAName([
//   { first: "Romeo", last: "Montague" }, 
//   { first: "Mercutio", last: null }, 
//   { first: "Tybalt", last: "Capulet" }], 
//   { last: "Capulet" }));

console.log(whatIsInAName([
  { "apple": 1, "bat": 2 }, 
  { "bat": 2 }, 
  { "apple": 1, "bat": 2, "cookie": 2 }], 
  { "apple": 1, "bat": 2 })
  );