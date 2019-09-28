// spreads an array of arrays and then removes duplicate items from array
// and maintains the original order of items in the array

function uniteUnique(...arr) {
  let arr1 = [].concat(...arr);

  let arr2 = arr1.filter((item, pos)=> {
    return arr1.indexOf(item) == pos;
  })

  return arr2;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));