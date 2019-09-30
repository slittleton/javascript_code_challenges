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

