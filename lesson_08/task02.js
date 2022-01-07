"use strict";

let funRandom = (value, n, m) => {
  let min = Math.abs(n);
  let max = Math.abs(m);
  let array = [];
  if (min > max) {
    max = n;
    min = m;
  }
  for (let i = 0; i < value; i++) {
    array.push(Math.round(Math.random() * (max - min) + min));
    if (array[i] == 0) {
      continue;
    }
  }
  return array;
};

//let number = +prompt("Введите количество елементов в масиве");
//let firstNumber =+prompt("Введите первое число диапазона");
//let secondNumber = +prompt("Введите второе число диапазона");
let number = 10;
let firstNumber = 5;
let secondNumber = 15;
let newArrayRandom = funRandom(number, firstNumber, secondNumber);
console.log("newArrayRandom: ", newArrayRandom);
