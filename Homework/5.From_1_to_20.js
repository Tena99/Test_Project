//Task 5. Вывести на страницу последовательность
// Вывести на страницу в одну строку через запятую числа от 10 до 20 и наоборот.
// Для вывода можно использовать - document.write('text');

for (let i = 10; i < 21; i++) {
  if (i == 20) {
    document.write(`${i}; `);
  } else {
    document.write(`${i}, `);
  }
}

for (let i = 20; i > 9; i--) {
  if (i == 10) {
    document.write(`${i}`);
  } else {
    document.write(`${i}, `);
  }
}
