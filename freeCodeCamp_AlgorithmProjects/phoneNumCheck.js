// Returns true if argument is a valid USA phone number pattern

function telephoneCheck(str) {
  let phone = /^(1\s?)?\(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}$/;
  let para1 = /^(1\s?)?\(\d{3}-?\s?\d{3}-?\s?\d{4}$/;
  let para2 = /^(1\s?)?\d{3}\)-?\s?\d{3}-?\s?\d{4}$/;

  if(phone.test(str)){
    if(para1.test(str)){ // if only the first paraentheses exists return false
      return false;
    }else if(para2.test(str)){ // if only the second paraentheses exists return false
      return false;
    }else{
      return true;
    }
  }else{
    return false;
  }

}
//True
console.log("True Stuff");
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1(555)555-5555"));


//False
console.log("False Stuff")
console.log(telephoneCheck("1 555)555-5555"));//
console.log(telephoneCheck("(6054756961)")); 
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("27576227382")); 
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("(555-555-5555"));//
console.log(telephoneCheck("(555)5(55?)-5555"));

/*
True
5555555555
555 555 5555
555-555-5555
(555)555-5555
(555) 555-5555
1(555)555-5555
1 555 555 5555
1 (555) 555-5555


False
1 555)555-5555
(6054756961)
2 (757) 622-7382
0 (757) 622-7382
(555-555-5555
  (555)5(55?)-5555
*/