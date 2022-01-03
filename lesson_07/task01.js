"use strict";

function filter() {
  let goodStudents = allStudents
    .filter((x) => !bedStudents.includes(x))
    .concat(bedStudents.filter((x) => !allStudents.includes(x)));

  console.log("goodStudents: ", goodStudents);
}

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const bedStudents = ["Сидоров", "Смирнов", "Попов"];

filter(allStudents, bedStudents);
