"use strict";

console.log("вторая задача  ");

let string = prompt("Введите строку");
let getChangeString = () =>
  string[0].toUpperCase() + string.substring(1).toLowerCase();

console.log(getChangeString(string));
