"use strict";

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const midlleSum = ([...arr]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i] / arr.length;
  }
  return sum;
};
const midlle = midlleSum(allСashbox);
console.log("Средняя сумма по чеку: ", midlle);
