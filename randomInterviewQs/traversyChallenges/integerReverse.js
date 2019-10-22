// Integer Reversal =================================
// reverse integer and preserve sign  -123 -> -321
function reverseInt(int) {
  return (
    parseInt(
      int
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(int)
  );
}
console.log(reverseInt(-456));