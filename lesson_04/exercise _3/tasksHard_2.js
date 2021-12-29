//Задание дополнительное - вторая задача

"use strict";

//let sumaEarnings = +prompt("Введите сумму полученного заработка(Задача 2)");
let sumaEarningsRegres = sumaEarnings;
switch (true) {
  case sumaEarningsRegres <= 0:
    console.log(`Эт как в минус то)) введите сумму правильно`);
    break;
  case sumaEarningsRegres <= 15000:
    console.log(
      `Сумма налога по второму способу ${(sumaEarningsRegres * 13) / 100} руб`
    );
    break;
  case sumaEarnings <= 50000:
    console.log(
      `Сумма налога второму способу ${
        ((sumaEarningsRegres - 15000) * 20) / 100
      } руб`
    );
    break;
  case sumaEarnings > 50000:
    console.log(
      `Сумма налога второму способу ${
        ((sumaEarningsRegres - 50000) * 30) / 100
      } руб`
    );
    break;

  default:
    console.log("Введите правильно сумму полученного заработка");
}
