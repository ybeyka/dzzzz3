"use strict";
const Num = prompt("Введіть число:");
if (isNaN(Num)) {
  console.log("Введено некоректне число.");
}
 
  else {
    console.log("Числа, кратні 5, у заданому діапазоні:");
}
if (Num < 0){
    console.log("Sorry, no numbers");
}
  for (let i = 0; i <= Num; i++) {
    if (i % 5 === 0) {
     console.log(i);
    }
  }

 



