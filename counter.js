let counter_value = 0;
let array = [];
var createCounter = function (n) {
  counter_value++;

  for (let i = 0; i < counter_value; i++) {
    array.push(n++);
  }
  console.log(array);
  return counter_value;
};

console.log(createCounter(3));
console.log(createCounter());
console.log(createCounter());
