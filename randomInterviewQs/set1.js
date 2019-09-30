// Create function to summ all ages in complex object

const profile = {
  name: "a",
  age: 3,
  kids: [
    {
      name: "b",
      age: 7,
      kids: [
        {
          name: "c",
          age: 5
        }
      ]
    }
  ]
};

function sumAges(obj) {
  let total = 0;

  function helper(ob) {
    for (let prop in ob) {
      if (prop === "age") {
        total += ob[prop];
      } else if (Array.isArray(ob[prop])) {
        ob[prop].forEach(item => {
          helper(item);
        });
      }
    }
  }

  helper(obj);
  return total;
}
// console.log(sumAges(profile));

/**
 * create function that prints math problems
 * each problem adds two numbers ex: 1 + 4 =
 * the sum of the numbers must be less than a specified 
 * max number
 *
 */
function mathProbs(probsNum, maxNum) {
  for (let i = 0; i < probsNum; i++) {
    let num1 = Math.round(Math.random() * maxNum);
    let num2 = Math.round(Math.random() * (maxNum - num1))
    console.log(`${num1} + ${num2} = `)
  }
}
mathProbs(5, 10);
