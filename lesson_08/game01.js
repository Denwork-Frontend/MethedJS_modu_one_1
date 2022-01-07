"use strict";

const numberRandom = Math.round(Math.random() * 100);
console.log("numberRandom: ", numberRandom);
let numberPersom1;
let numberPersom = +prompt("Введите число от 0 до 100");
if (numberPersom == 0) {
  console.log("Game over");
} else if (isFinite(numberPersom) == false) {
  console.log("Введите число");
} else if (numberPersom < numberRandom) {
  console.log("Больше");
  numberPersom1 = +prompt("Попробуйте еще раз");
  if (numberPersom1 == numberRandom) {
    console.log("Правильно");
  } else {
    console.log("Неугадали");
  }
} else if (numberPersom > numberRandom) {
  console.log("Меньше");
  numberPersom1 = +prompt("Попробуйте еще раз");
  if (numberPersom1 == numberRandom) {
    console.log("Правильно");
  } else {
    console.log("Неугадали");
  }
} else if ((numberPersom = numberRandom)) {
  console.log("Правильно");
}
