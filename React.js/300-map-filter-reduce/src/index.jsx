var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);

// var newNumbers = [];

// numbers.forEach(function (x) {
// newNumbers.push(x * 2);
// });

//Filter - Create a new array by keeping the items that return true.

const filterNumber = numbers.filter(function (num) {
  return num > 10;
});

// var filterNumber = [];

// numbers.forEach(funtion(num) {
//   if (num < 10) {
//     filterNumber.push(num);
//   }
// });

//Reduce - Accumulate a value by doing something to each item in an array.

numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});

// var reduceNumber = 0;
// numbers.forEach(funtion (currentNumber) {
//   reduceNumber += currentNumber;
// });

//Find - find the first item that matches from an array.

const findNumber = number.find(function (num) {
    return num > 10;
});

//FindIndex - find the index of the first item that matches.

const findFirstNumber = number.findIndex(function (num) {
    return num > 10;
});

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);