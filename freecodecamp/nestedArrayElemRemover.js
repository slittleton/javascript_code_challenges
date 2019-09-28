// Filters a nested arrays to remove a specific element from each
function filteredArray(arr, elem) {
  let newArr = [];
  let tempArr = [];


  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if (arr[i][j] !== elem){
        tempArr.push(arr[i][j]);
      }
    }
    newArr.push(tempArr);
    tempArr = [];
    }


  return newArr;
}


var x = filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);
console.log(x);


// Filter Out Contaminated Array
function contamArrayRemove(arr, elem) {
  let newArr = [];

  let contaminatedArr = [];
  for(var i = 0; i < arr.length; i++){
      if (arr[i].includes(elem)){
        // contaminatedArr.push(arr[i]); // if you  want the contaminated array
        continue;
      }else{
        newArr.push(arr[i]);
      }
    }


  return newArr;
}


var x = contamArrayRemove([[1,2],[1,2,3],[1,2]], 3);
console.log(x);
