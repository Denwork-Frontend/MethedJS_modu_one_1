"use strict";

console.log("Первая задача ");

let price = +prompt("Введите цену покупки в евро");
let getChange = () => price * 73 * 1.2;
console.log(`Цена покупки ${getChange(price)} рублей`);
