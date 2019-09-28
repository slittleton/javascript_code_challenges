// Returns an array with all elements flattened no matter how deep the original array

function steamrollArray(arr) {
  let arr1 = arr;
  count = 0;
  let boo = true;

  while (boo){
    if(Array.isArray(arr1[count])){
      arr1 = arr1.flat();
    }
    if(!Array.isArray(arr1[count])){
      count++;
    }
    if(count > arr1.length){
      boo=false;
    }
  }

  return arr1;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));//should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]]) );//should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].



// Alternate Solution Using Recursion
function steamrollArray(arr) {
  let newArr = arr;
  let boo;

  function flatter(){
    for(var i = 0; i< newArr.length; i++){
      boo = false;
      
      if(Array.isArray(newArr[i])){
        boo = true;
        newArr = newArr.flat();
      }else{
        boo = false;
      }

      if(boo === true){
        flatter();
      }
    }

    return newArr;
  }
  flatter();

  return newArr;
}

// Shorter Version of Recursive Solution
function steamrollArray(arr) {
  let newArr = arr;

  function flatter(){
    for(var i = 0; i< newArr.length; i++){
      if(Array.isArray(newArr[i])){
        newArr = newArr.flat();
        flatter();
      }
    }
    return newArr;
  }

  flatter();

  return newArr;
}




// Alternate solution if no {} are in the array  Using RegEx-- the {} change position when array is flattened
// so it is difficult to keep track of which arr[i] to replace arr1[i] with

function steamrollArray(arr) {
  let arr1 = arr;
  let numTest = /\d/;
  // let objTest = "[object Object]";
  let str = arr1.toString();

  arr1 = str.split(",");
  console.log(arr1);

  for(var i = 0; i < arr1.length; i++){

    if (arr1[i].match(numTest)){
      arr1[i] = Number(arr1[i]);
    }

    // if(Boolean(arr1[i].match(objTest))){
    // //   arr1[i] = arr[i];
    // console.log('hi');
    // }
  }

  arr1 = arr1.filter(function (el) {
    return el != "";
  });

  return arr1;
}