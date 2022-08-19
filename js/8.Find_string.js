// Task 8.
// Найти в строке указанную подстроку и заменить ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь. indexOf, substring, substr

let firstString = prompt(`1. Пожалуйста, введите любой текст`);
console.log(firstString);
let secondString = prompt(
  `2. Пожалуйста, введите текст который вы хотите заменить`
);
console.log(secondString);
let thirdString = prompt(
  `3. Пожалуйста, введите текст на который вы хотите заменить указанный отрезок`
);
console.log(thirdString);

// Положение искомого элемента

let IndexPos = firstString.indexOf(secondString);

// Вырезать подстроку до искомого элемента

let startSubstr = firstString.substring(0, IndexPos);
console.log(startSubstr);

// Вырезать подстроку после искомого элемента

let endSubstr = firstString.substr(IndexPos + secondString.length);
console.log(endSubstr);

// Сложить полученный результат и вывести в консоль

let result = startSubstr + thirdString + endSubstr;
document.write(result);
