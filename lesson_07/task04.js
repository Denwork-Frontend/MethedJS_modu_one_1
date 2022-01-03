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
  let s1 = arr[0][1] / arr[0][0];
  let s2 = arr[1][1] / arr[1][0];
  let s3 = arr[2][1] / arr[2][0];
  let s4 = arr[3][1] / arr[3][0];
  let s5 = arr[4][1] / arr[4][0];
  let s6 = arr[5][1] / arr[5][0];
  let s7 = arr[6][1] / arr[6][0];
  let s8 = arr[7][1] / arr[7][0];
  let Sum = Math.floor((s1 + s2 + s3 + s4 + s5 + s6 + s7) / arr.length);

  console.log("Средняя цена товара : ", Sum);
};

let rezult = getAveragePriceGoods(allСashbox1);

/*
const getAveragePriceGoods = (arr) => {
  let key1;
  let key2;
  let sum = 0;
  let arr2 = [];
  for (let i = 0; i < allСashbox1.length; i += 1) {
    for (let j = 1; j < allСashbox1[i].length; j += 3) {
      arr2.push(allСashbox1[i][j]);
      console.log("-------------", allСashbox1[j][i]);
    }

    console.log("********************", arr2);

    let arr1 = [];
    for (let i = 0; i < allСashbox1.length; i += 1) {
      for (let j = 0; i < allСashbox1[i].length; j += 4) {
        arr1.push(allСashbox1[i][j]);
        console.log("-------------", allСashbox1[i][j]);
        sum += arr2[i] / arr1[i];
      }
      console.log("//////////////////////////arr1: ", arr1);
      sum += arr2[key2] / arr1[key1];
    }
  }

  //let midlleСashbox = Math.floor(sum / number1.length);

  //console.log("midlleСashbox: ", midlleСashbox);
  console.log("sum: ", sum);
};

let rezult = getAveragePriceGoods(allСashbox1);
console.log("Средняя стоимость товара: ", rezult);
console.log("sum: ", sum);*/
