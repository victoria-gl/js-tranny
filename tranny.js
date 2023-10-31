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



         // Перевірка масивів
// console.log(typeof array)
// console.log(Array.isArray(array))
// console.log(Array.isArray("hello"))

      // Перший та останній елемент масиву

// const firstElement = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl)

// const array = ["Hello", 3, null, true, 5];

        // Перебір циклу

        //  Цикл for (використовується частіше)

// for (let i = 0; i < array.length; i += 1){
//         const item = array[i]
//         // console.log(item);
//         console.log(`index: ${i}. item: ${array[i]}`);
// }

        //  Цикл for of

// for (const item of array) {
//         console.log(item)
// }

        //  Присвоєння за посилання та за значенням
        // Примітивні типи данних - за значенням

// console.log("apple" === "apple");

// let a = 15;
// let b = a;

// b += 1;

// console.log(a);
// console.log(b);
// console.log(a === b);


        //    Складні типи данних за посиланням


// let a = [1, 2, 3]; 
// let b = a;

// b.push(4);

// console.log("a", a);
// console.log("b", b);
// console.log(a === b);
// console.log([1, 2, 3, 4] === [1, 2, 3, 4]);

// пояснення: (b створює посилання на а і тоді редагує масив, який є в а)


        //      Методи для роботи з масивами

//       push/pop

// const numbers = [1, 2, 3];
// numbers.push("hello", "world");
// console.log(numbers);

// const result = numbers.pop();
// console.log("result", result);
// console.log("numbers", numbers);

        //  shift/unshift
  
// const numbers = [1, 2, 3];
// numbers.unshift(4, 5, 6);
// console.log(numbers);

// const result = numbers.shift();
// console.log( "result", result);
// console.log("numbers", numbers);
 
        //      slice

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.slice(2);
// console.log(result);
// console.log(numbers);


        //     splice - різниця в тому, що він мутує початковий масив

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.splice(2, 2);
// console.log(result);
// console.log(numbers);

// можна замінити щось
// numbers.splice(2, 1, "Hello world");
// console.log("after replace", numbers);

// можна додати щось

// numbers.splice(2, 0, "Hello world")  ;
// console.log("after add", numbers);


        //   includes

// const str = ["a", "b", "c", "d"];

// console.log(str.includes("r"));
// console.log(str.includes("a"));


        //  indexOf

// const str = ["a", "b", "c", "d"];
// console.log(str.indexOf("a"));
// console.log(str.indexOf("e"));

        //   concat

// const str = ["a", "b", "c", "d"];
// const strA = ["e", "f"];
// const strB = ["g", "h"];

// const resultA = str.concat(strA, strB);
// console.log(resultA);

// const resultB = str.concat(strB, strA)
// console.log(resultB)


// Задача 1
// Напишіть скрипт, який буде перебирати масив 
// та видаляти з нього(мутувати)
// всі елемпенти не є типом даних Number

// const arr = [3, "Hello", null, 42, false];

// варіант 1 - перебір з початку
// for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] !== "number") {
//                 arr.splice(i, 1);
//                 i -= 1; 
//         }
// }

// варіант 2 - перебір з кінця
// for (let i = arr.length - 1; i >= 0; i -= 1){
//         if (typeof arr[i] !== "number") {
//               arr.splice(i, 1)
//       }
// }

// важливо додавати i -= 1, щоб 
// не пропускати елементи при перевірці

// console.log(typeof (null));
// console.log(arr);

// Задача 2 

// Потрібно створити функцію, яка буде приймати 1 параметр
// Функція повинна відбирати з масиву тільки ті елементи, що дублюються
// в ньому та повернути їх у вигляді нового масиву як результат
// функції

// function getCommonElements(arr) {
//         const result = []
//         for(let i = 0; i < arr.length; i++) {
//                 if (arr.includes(arr[i], i+1)) {
//                     result.push(arr[i])
//                 }
//         }
//         return result
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 17]));


// function getCommonElements(arr) {
//         const uniq = []
//         const repeat = []

//         for (const item of arr) {
//                 if (!uniq.includes(item)) {
//                         uniq.push(item)
//                 } else {
//                         repeat.push(item)
//                 }
//         }
//         return repeat
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 17]));

// Задача 3 

// Потрібно створити функцію, що буде приймати 2 параметри
// 1 пар це мас всіх юзерів
// 2 пар це масив з чол іменами

// Функція повинна відібрати з масиву всіх юзерів з жін іменами 
// та повернути їх в результаті

// const users = ["Artem", "Alina", "Roman", "Victoria"];
// const men = ["Artem", "Roman"];

// function getWoman(users, men) {
//         const woman = []

//         for (const user of users) {
//         //  console.log(user);
//                 if (!men.includes(user)) {
//                         woman.push(user)
//                 }
//         }
//      return woman
// }

// console.log(getWoman(users, men))


// Завдання 4 - Масиви та рядки

// Напиши скрипт, який розгорне рядок 
// (зворотний порядок літер)
// і виводить його в консоль

// const string = "Welcome to the future";
// const result = string.split("").reverse().join("");
// console.log(result)


// Завдання 5

// Напиши скрипт, який буде перевіряти чи елементи в масиві
// розташовані в порядку зростання,
// якщо ні, то замінювати елементи на вірні    

// const numbers = [1, 2, 3, 1, 5, 6, 1, 7, 1, 10];

// numbers.sort(function (a, b) {
//         return a - b
// })

// numbers.sort((a, b) => a-b)

// console.log(numbers);

// Завдання 6

// Напиши функцію, яка на основі масиву користувачів що
// поставили лайк формує та повертає рядок
// Функція має повернути текст:

// [] - "no one"
// ["Peter"] - "Peter likes this"
//[Jacob, Alex] - "Jacob and Alex like this"
// [Jacob, Alex, Mark] - Jacob, Alex, and like this
// [Jacob, Alex, Mark, Max] - Jacob and 2 others like this

// function createStr(arr) {
//         let message;
//         switch(arr.length) {
//                 case 0:
//                         message = "no one";
//                         break;
//                 case 1:
//                         message = `${arr[0]} likes this`;
//                         break;
//                 case 2:
//                         message = `${arr[0]} and ${arr[1]} like this`;
//                         break;
//                 case 3:
//                         message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//                         break;
//                 default:
//                         message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//         }
//         return message
// }

// console.log(createStr(["Jacob", "Alex", "Mark", "Max", "Victoria"]));



// Урок 2.2

// function foo(a, b) {
//         return a + b
// }

// console.log(foo(1, 3))
// console.log(foo(3, 15))

 
       // 2 способи оголошення функції:
// 1) function declaration

// foo()
// function foo() {
//         console.log("Hello")
// }


// 2) function expression

// const foo = function (val1, val2) {
//         return val1 + val2
// }

// console.log(foo(1, 2)); (не можемо викликати до створення функції)




// Псевдомасив arguments

// такий самий масив, але без його методів(має зокрема індексацію)

// function getSum() {
//         let sum = 0;
//         // console.log(arguments.length);
//         // for (const item of arguments) {
//         //         console.log(item);
//         // }
//         const arr = Array.from(arguments)
//         // console.log(Array.isArray(arr));

//         for (const item of arr) {
//                 sum += item
//         }

//      return sum
// }

// const result = getSum(2, 3, 4, 5, 6)
// console.log(result);

// Області видимості, присвоєння за значенням і за посиланням


// Example 1
// let value = 11;

// if (true) {
//     value = 4;
// }

// console.log(value);


// Example 2
// let value = 11;
// if (true) {
//         let value = 4;
// }
 
// console.log(value);


// Example 3
// let someValue = 4;

// if (true) {

//         if (true) {
//                 someValue = 24;
//         }
//         // console.log("block", someValue)
//          someValue = 11;
// }

// console.log(someValue);


// Example 4
// let someValue = 2;

// function checkScope(someValue) {
//         someValue = 45;
//         return someValue;
// }

// console.log(checkScope(someValue));

// console.log(someValue);

// Example 5

// let someValue = 2;

// function checkScope() {
//         someValue = 45;
//         return someValue;
// }

// checkScope(someValue)
// console.log(someValue);

// Example 6

// let someArray = ["Hello", "my", "name", "scope"];

// function checkScope(arr) {
//         arr.splice(0, 3);
// }

// checkScope(someArray)
// console.log(someArray);

// let someArray = ["Hello", "my", "name", "scope"];

// function checkScope(arr) {
//         arr = Array.from(arr);
//         arr.splice(0, 3);
// }

// checkScope(someArray)
// console.log(someArray);


// Завдання 1
// Створи ф - цію, яка буде перевіряти чи кожен елемент
// масиву більше, ніж вказане значення
// Функція приймає 2 параметри 
// 1 - Масив чисел
// 2 - Число, яке потрібно порібнювати з усіма елементами масиву

// Функція повертає повідомлення про успішну або не успішну перевірку

// const numbers = [25, 12, 67, 40, 18];

// коли ств ф-цію - в дужках параметри
// function checkValue(arr, target) { 
//         let message = "Success";
//         for (const number of arr) {
//                 console.log(number);
//                 if (target > number) {
//                         message = "Fail";
//          }
//         }
//         return message;
// }

// коли викл ф-цію - в дужках аргументи
// console.log(checkValue(numbers, 10))
// console.log(checkValue(numbers, 13))

// Застосування ф-ції + патерн раннє повернення 
// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//         for (const item of arr) {
//                 console.log(item)
//                 if (target > item) {
//                         return "Fail"
//                 }
//         }
// return "Success"
// }

// console.log(checkValue(numbers, 10))
// console.log(checkValue(numbers, 13))



// Завдання 2
// Ств ф - цію, яка буде розбивати початковий масив
// на потрібну к - сть елементів розділяючи на декілька 
// масивів.Ф - ція приймає 2 параметри:
// 1 - масив значень 
// 2 - потрібну к - сть елементів в масиві
// Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//         const res = [];
//         for (let i = 0; i < arr.length; i+= count) {
//                 const comb = arr.slice(i, i + count);
//                 res.push(comb)
//         }
//         return res
// }

// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));



// Завдання 3
// Ств ф - цію, яка буде обчислювати площу прямокутника 
// зі сторонами, значення яких будуть передані до параметрів 
// dimensions у вигляді рядка.
// значення гарантовано розділені пробілом

// function getRectArea(dimensions) {
//         // console.log(dimensions)
//         const arr = dimensions.split(" ");
//         // console.log(arr);
//         const firstValue = Number(arr[0]);
//         const secondValue = +arr[1];
//         // console.log(typeof secondValue);

//         return firstValue * secondValue;
// }

// console.log(getRectArea("8 11"))



// Завдання 4
// Напишіть ф - цію для роботи з колекцією навчальних
// курсів courses
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс з колекції
// updateCourse(oldName, newName) - замінює імя на нове

const courses = ["HTML", "CSS", "JavaScript", "React"]

// function addCourse(name) {
//         if (courses.includes(name)) {
//                 return "Курс вже є"
//         }
//         courses.push(name)
// }

// addCourse("Express")
// console.log(courses)
// console.log(addCourse("CSS"));

// function removeCourse(name) {
//         const idx = courses.indexOf(name)

//         if (idx === -1) {
//                 return "Курсу немає"
//         }
//         courses.splice(idx, 1)
// }

// removeCourse("CSS")
// console.log(courses)
// console.log(removeCourse("Vue"));

// function updateCourse(oldName, newName) {
//         const idx = courses.indexOf(oldName)

//         if (idx !== -1) {
//                 courses[idx] = newName;
//                 return
//         }
// return "Вже є "
// }

// updateCourse("HTML", "NodeJs")
// console.log(courses)
// console.log(updateCourse("efjw", "Vue"));




