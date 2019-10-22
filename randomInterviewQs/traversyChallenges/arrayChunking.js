
// Array Chunking ======================================
// split an array into chunked arrays of a specific length
// ([1,2,3,4,5,6], 2) -> [[1,2], [3,4], [5,6]]
function chunkArray(arr, len) {
  let newArr = [];
  let temp = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    count++;
    if (count === len) {
      newArr.push(temp);
      temp = [];
      count = 0;
    }
  }
  return newArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));