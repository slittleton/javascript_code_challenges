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
