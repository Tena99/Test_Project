//Task
// Написать функцию возведения числа в степень

let result;

// Вариант 1

function multiply_1(value, exponent) {
  return (result = value ** exponent);
}

console.log(multiply_1(10, 2));

// Вариант 2

function multiply_2(value, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= value;
  }
  return result;
}

console.log(multiply_2(10, 2));
