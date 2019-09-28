// Replaces string characters  &, <, >, ", and ' with their HTML entities  

function convertHTML(str) {
  // &colon;&rpar;
  /*
  & = &amp;
  < = &lt;
  > = &gt;
  " = &quot;
  ' = &apos;
   */
  // let str1 = str;
  
  str = str
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

  return str;
  
}
console.log(convertHTML("Dolce & Gabbana < word> didn't "));
console.log(convertHTML('this "tests" " quotes'));