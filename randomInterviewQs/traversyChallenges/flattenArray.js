
// Flatten Array ======================================
// take an array of arrays and flatten to a single array
function flattenArray(arrays) {
  let flat = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flat.push(...flattenArray(arrays[i]));
    } else {
      flat.push(arrays[i]);
    }
  }
  return flat;
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6, 7], 8]));