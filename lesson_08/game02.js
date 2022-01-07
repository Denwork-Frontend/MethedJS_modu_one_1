"use strict";
"use strict";

console.log("Установим интервал");
let min = +prompt("Ведеите первое число диапазона");
let max = +prompt("Ведеите второе число диапазона");
let numberPersom = [];
min = Math.abs(min);
max = Math.abs(max);
if (min > max) {
  let n = max;
  max = min;
  min = n;
}
let numberRandom = Math.round(Math.random() * (max - min) + min);
console.log("numberRandom: ", numberRandom);
console.log("numberPersom: ", numberPersom);
let numberAttempts = Math.round((max - min) * 0.3);
console.log(`И так у вас есть ${numberAttempts} попыток`);
let numberAttemptsСounter = numberAttempts;

for (let i = 1; i <= numberAttempts; i++) {
  let numberPersomAttempts = +prompt(
    `Введите число. У Вас осталось ${numberAttemptsСounter} попыток`
  );
  if (numberPersomAttempts === numberRandom) {
    console.log("Вы угадали");
    break;
  } else if (numberPersomAttempts !== numberRandom) {
    if (numberPersom.includes(numberPersomAttempts)) {
      console.log("Это число вы уже вводили");
      continue;
    }
    console.log("Вы не угадали. Продолжим");
    numberAttemptsСounter--;
    numberPersom.push(numberPersomAttempts);
    console.log(" numberPersom: ", numberPersom);
  }
  if (numberAttemptsСounter == 0)
    console.log(
      "Ваше благородие, госпожа удача,Для кого ты добрая, а кому иначе."
    );
}
