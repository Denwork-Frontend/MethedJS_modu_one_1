"use strict";

let num = +prompt("Введите число");

function isPrime() {
  let view = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      view = false;
      break;
    }
  }
  if (view == true) {
    console.log(` Число ${num} простое`);
  } else {
    console.log(` Число ${num} составное`);
  }
}

isPrime(num);
