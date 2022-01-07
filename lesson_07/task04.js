"use strict";

let allСashbox1 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (arr) => {
  console.log("arr: ", arr);
  let sum = 0;

  let arr2 = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr[i].length; j += 3) {
      arr2.push(arr[i][j]);
      console.log("-------------", arr[j][i]);
    }

    console.log("********************", arr2);
    console.log("arr2: ", arr2);
  }
  let number2 = arr2;
  console.log("Number2: ", number2);

  let number1 = arr
    .filter((x) => !number2.includes(x))
    .concat(number2.filter((x) => !arr.includes(x)));
  console.log("number1: ", number1);
};
let rezult = getAveragePriceGoods(allСashbox1);
console.log("Средняя стоимость товара: ", rezult);

/*

  let arr1 = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; i < arr[i].length; j += 4) {
      arr1.push(arr1[i][j]);
      console.log("-------------", arr1[i][j]);
    }
    console.log("//////////////////////////arr1: ", arr1);
    let Number1 = arr1;
    console.log("Number1: ", Number1);
  }
};

let rezult = getAveragePriceGoods(allСashbox1);
console.log("Средняя стоимость товара: ", rezult);

/*
/*

//let midlleСashbox = Math.floor(sum / number1.length);

//console.log("midlleСashbox: ", midlleСashbox);
//console.log("sum: ", sum);
let rezult = getAveragePriceGoods(allСashbox1);
console.log("Средняя стоимость товара: ", rezult);
//console.log("sum: ", sum);
*/
//console.log("sum: ", sum);
/*var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var result = [].concat(...arr);

console.log(result);
let sum1 = 0;
for (let i = 0; i < result.length; i++) {
  console.log(`${i} - --- ${result}`);
  sum1 += result[i + 2] / result[i + 1];
  console.log("sum: ", sum1);
}
*/
