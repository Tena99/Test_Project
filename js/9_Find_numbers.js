// Task
// Вводится строка произвольного содержания (буквы, числа, символы). Найти все числа в строке. Результат число. Например, если дана строка 23Gjf4uf21, результат 23421

let firstString = prompt("Введите любое значение");
let result = "";
console.log(firstString);

// Перебераем всю строку, спрашиваем у каждого элемента является ли он числом, если да, то записываем.

for (let i = 0; i < firstString.length; i++) {
  let currentItem = firstString[i];
  console.log(currentItem);

  let tmp = parseInt(currentItem);

  if (!isNaN(tmp)) {
    result += currentItem;
    console.log("Result: " + result);
  }
}
