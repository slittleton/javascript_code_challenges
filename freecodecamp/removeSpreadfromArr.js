// Returns an array that does not contain any elements from the other parameters

function destroyer(arr, ...args) {

  let result = arr.filter(x=> !args.includes(x));

  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));