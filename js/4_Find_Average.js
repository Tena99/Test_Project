// Task 4. Среди трех чисел найти среднее
// Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).

let first_number = prompt("Введите первое число");
let second_number = prompt("Введите второе число");
let third_number = prompt("Введите третье число");

if (
  first_number == null ||
  second_number == null ||
  third_number == null ||
  first_number == "" ||
  second_number == "" ||
  third_number == ""
) {
  alert(`К сожалению, вы не указали одно или несколько чисел`);
} else if (first_number > second_number && first_number < third_number) {
  alert(`Спасибо! Среднее число ${first_number}`);
} else if (first_number < second_number && first_number > third_number) {
  alert(`Спасибо! Среднее число ${first_number}`);
} else if (second_number > first_number && second_number < third_number) {
  alert(`Спасибо! Среднее число ${second_number}`);
} else if (second_number < first_number && second_number > third_number) {
  alert(`Спасибо! Среднее число ${second_number}`);
} else if (third_number > first_number && third_number < second_number) {
  alert(`Спасибо! Среднее число ${third_number}`);
} else if (third_number < first_number && third_number > second_number) {
  alert(`Спасибо! Среднее число ${third_number}`);
} else if (first_number == second_number) {
  alert(`Спасибо! Среднее число ${first_number}`);
} else if (second_number == third_number) {
  alert(`Спасибо! Среднее число ${second_number}`);
} else if (third_number == first_number) {
  alert(`Спасибо! Среднее число ${third_number}`);
} else if (third_number < first_number && third_number > second_number) {
  alert(`Спасибо! Среднее число ${third_number}`);
} else {
  alert(`Попробуйте еще раз`);
}
