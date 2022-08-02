// Task 15.  Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

let result = "";

const compact = (array) => {

    if (typeof (array) == "number") {
        return array;
    }
}

const data = [0, 1, false, 2, undefined, '', 3, null].filter(compact)
console.log(data) // [1, 2, 3]


// -------------------------------------------------------------------------------------------//

// function isBigEnough(value) {
//
//     return value >= 10;
//
// }
//
// let filtered = [12, 10, 2, 8, 130].filter(isBigEnough)
// console.log(filtered)
//
// // -------------------------------------------------------------------------------------------//
//
// let isBigEnough = function (value) {
//     return value >= 10;
// }
//
// let filtered = [12, 10, 2, 8, 130].filter(isBigEnough)
// console.log(filtered)
//
// // -------------------------------------------------------------------------------------------//
//
// let isBigEnough = (value) => {
//     return value >= 10;
// }
//
// let filtered = [12, 10, 2, 8, 130].filter(isBigEnough)
// console.log(filtered)

// -------------------------------------------------------------------------------------------//