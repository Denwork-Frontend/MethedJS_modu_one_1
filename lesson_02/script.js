"use strict";
{
  const nameProduct = "молоко";
  const productQuantity = 30;
  const productCategory = "продукты";
  const productPrice = 15;
  console.log(
    `Общая сумма товара из категории ${productCategory}, а именно ${nameProduct} равна ${
      productQuantity * productPrice
    } руб`
  );
}

{
  const nameProduct = prompt("Введите название продукта");
  const productQuantity = +prompt("Введите количество продукта");
   const productCategory = prompt("Введите категорию  продукта");
  const productPrice = +prompt("Введите цену за единицу продукта");

  console.log('Тип данных nameProduct: ', typeof nameProduct);
  console.log('Тип данных productQuantity: ', productQuantity);
  console.log('Тип данных productCategory: ', productCategory);
  console.log('Тип данных productPrice: ', productPrice);
  console.log(
    `Общая сумма товара из категории ${productCategory}, а именно ${nameProduct} равна ${
      productQuantity * productPrice} руб`
  );
}
