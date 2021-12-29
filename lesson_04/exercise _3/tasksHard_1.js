//Задание дополнительное - первая задача

"use strict";
let sumaEarnings = +prompt("Введите сумму полученного заработка");

switch (true) {
  case sumaEarnings <= 0:
    console.log(`Эт как в минус то?)) введите сумму правильно`);
    break;
  case sumaEarnings < 15000:
    console.log(`Сумма налога ${(sumaEarnings * 13) / 100} руб`);
    break;
  case sumaEarnings == 15000:
  case sumaEarnings < 50000:
    console.log(`Сумма налога ${(sumaEarnings * 20) / 100} руб`);
    break;
  case sumaEarnings >= 50000:
    console.log(`Сумма налога ${(sumaEarnings * 30) / 100} руб`);
    break;

  default:
    console.log("Введите правильно сумму полученного заработка");
}
