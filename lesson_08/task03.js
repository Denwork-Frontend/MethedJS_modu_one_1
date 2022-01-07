"use strict";
let funRandom = (value, n, m, string) => {
  let min = Math.abs(n);
  let max = Math.abs(m);
  let array = [];
  if (min > max) {
    max = n;
    min = m;
  }
  while (array.length < value) {
    if (string == "add") {
      let a = Math.round(Math.random() * (max - min) + min);
      if (!(a % 2 === 0)) array.push(a);
    } else if (string == "evan") {
      let a = Math.round(Math.random() * (max - min) + min);
      if (a % 2 === 0) array.push(a);
    }
  }
  return array;
};

//let number = +prompt("Введите количество елементов в масиве");
//let firstNumber =+prompt("Введите первое число диапазона");
//let secondNumber = +prompt("Введите второе число диапазона");
//let stringEvenAreOdd = prompt(`Введите значение "evan" если нужен четный масив или "add" если не четный );

let number = 10;
let firstNumber = 5;
let secondNumber = 50;
let stringEvenAreOdd = "evan";
let newArrayRandom = funRandom(
  number,
  firstNumber,
  secondNumber,
  stringEvenAreOdd
);
console.log("newArrayRandom: ", newArrayRandom);
console.log("newArrayRandom1111: ", newArrayRandom.length);
