"use strict"

              // Урок 1.1

// const yearOfBirth = "Mango";
// console.log(yearOfBirth);

// console.log(typeof yearOfBirth)

// const name = "Victoria";
// console.log(typeof name)


// let age
// age = 2;
// console.log(age)


// Конвертація значень до false
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(false))

// ще один варіант запису
// console.log(!!2)

           // ДЗ

// const productName = "Droid";
// const pricePerItem = 2000;





          // Урок 1.2

// const value = 20;
// if (value === 20) {
//     console.log("ok");
// } else {
//     console.log("no")
// }

// if (value === 1) {
//    console.log("first")
// } else if (value === 10){
//    console.log("tenth")
// } else if (value === 20){
//     console.log ("twenty")
// };

         // Інструкція switch

// const value = 1;

// switch (value) {
//     case 1:
//         console.log("value is one");
//         break;
//     case 2:
//         console.log("value is two");
//         break;
//     case 3:
//         console.log("value is three");
//         break;
//     default:
//         console.log("default")
// }

        //  Тернарний оператор

// const value = 16;
// let message = value > 15 && value < 20 ? "diapazon 15-20" : "try more";

// if (value > 15 && value < 20) {
//     message = "diapazon 15-20";
// } else {
//     message = "try more";
// }

// console.log(message);


        //   Області видимості

// let number = 10;

// if (true) {
//     number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// let number = 10;

// if (true) {
//     let number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);


        //   Цикл for
   
// let str = "Hello world"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

        //    Цикл while
               
// let str = "Hello world";
// let i = 0;

// while(i < 1) {
//     console.log("Hello while");
//     i++
// }

         //  Цикл do while

// let q = 0;

// do {
//     console.log("Hello do");
//     q++;
// } while(i < 0) 


        //    Оператор break

// const str = "Hello world";
// let idx;

// for (let i = 0; i < str.length; i++) {
//     // console.log(i);
//     if (str[i] === "l") {
//         console.log(i);
//         idx = i
//         // break;
//     }   
// }
// console.log ("result", idx)

            // Оператор continue

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log("Парне", i)
//         continue;
//     }
//     console.log("Не парне", i)
// }

        //  Урок 2.1

        