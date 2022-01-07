"use strict";

const funRandom = (value) => {
  let array = [];
  for (let i = 0; i < value; i++) {
    array.push(Math.round(Math.random() * 100));
    if (array[i] == 0) {
      continue;
    }
  }
  return array;
};
let n = +prompt("Введите количество елементов в масиве");
let newArrayRandom = funRandom(n);
console.log("newArrayRandom: ", newArrayRandom);
