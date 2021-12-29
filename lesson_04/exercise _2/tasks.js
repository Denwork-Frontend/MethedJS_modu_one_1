"use strict";

//Вторая задача:

const rain = Math.round(Math.random());
if (rain == 1) {
  console.log(`rain = ${rain}. Пошёл дождь. Возьмите зонт!`);
} else {
  console.log(`rain = ${rain}. Дождя нет!`);
}

// Третья задача

const mathematics = +prompt("Введите количество балов по математике");
const languageRussian = +prompt("Введите количество балов по русскому языку");
const Informatics = +prompt("Введите количество балов по информатике");
const sumBall = mathematics + languageRussian + Informatics;

if (sumBall >= 265) {
  console.log(`Поздравляю, Вы набрали ${sumBall} и поступили на бюджет!`);
} else {
  console.log(
    `Вы набрали ${sumBall} потому берем зонт из задачи 2 и идем домой`
  );
}

// Четвёртая задача:

const maney = +prompt("Какую сумму Вам нужно выдать?");
if (maney % 100 === 0) {
  console.log(`Без проблем готовь карманы`);
} else {
  console.log(`Выдача не возможна. Нужно ввести сумму кратную 100`);
}
