"use strict";

const nameProduct = prompt("Введите название продукта");
const productQuantity = +prompt("Введите количество продукта");
const productCategory = prompt("Введите категорию  продукта");
const productPrice = +prompt("Введите цену за единицу продукта");

if (
  Number.isFinite(productQuantity) == true &&
  Number.isFinite(productPrice) == true
) {
  console.log(
    `Общая сумма товара из категории ${productCategory}, а именно ${nameProduct} равна ${
      productQuantity * productPrice
    } руб`
  );
} else {
  console.log(`Вы ввели некорректные данные`);
}
