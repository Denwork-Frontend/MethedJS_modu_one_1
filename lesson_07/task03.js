"use strict";

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

//mr = "Mr";

const addPrefix = (arr, mr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = mr + " " + arr[i];
  }
  return newArr;
};

const namesPersom = addPrefix(names, "Mr");
//console.log("newArr: ", newArr);
console.log("namesPersom: ", namesPersom);
