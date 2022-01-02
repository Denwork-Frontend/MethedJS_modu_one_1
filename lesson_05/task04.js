"use strict";

const paymentDiscount = (totalSum, numberGoods, promoCode) => {
  let totalSumDiscount = totalSum;
  let numberGoodsDiscount = numberGoods;
  let promoCodeDiscount = promoCode;

  if (numberGoodsDiscount > 10) {
    totalSumDiscount = totalSumDiscount - totalSumDiscount * 0.03;
  } else if (totalSumDiscount > 30000) {
    totalSumDiscount = (totalSumDiscount - 30000) * 0.85 + 30000;
  } else if (promoCodeDiscount.toUpperCase() == "METHED") {
    totalSumDiscount = totalSumDiscount - totalSumDiscount * 0.1;
  } else if (
    promoCodeDiscount.toUpperCase() == "G3H2Z1" &&
    totalSumDiscount > 2000
  ) {
    totalSumDiscount = totalSumDiscount - 500;
  }
  return totalSumDiscount;
};

let Sum = +prompt("Введите общую сумму корзины");
let Goods = +prompt("Введите количество товаров в корзине");
let Code = prompt("Введите промокод ");
const allSum = paymentDiscount(Sum, Goods, Code);

console.log(`Общая сумма корзины со скидками равна  ${allSum} руб`);
