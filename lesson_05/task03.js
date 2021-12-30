"use strict";

console.log(" Третья задача  ");

let string03 = prompt("Введите строку");
let getReversString = () => string03.split("").reverse().join("");

console.log(getReversString(string03));
