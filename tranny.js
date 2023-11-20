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

// const courses = ["HTML", "CSS", "JavaScript", "React"]

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






                           // Урок 3.1


 //    Обʼєкт

// const user = ["Kate", 20, 300]

// const user = {
//         name: "Kate",
//         skills: {
//                 html: true,
//                 css: true,
//                 JS: false,
//         }
// }


// Звернення до властивостей обʼєкта

// console.log(user.name)
// console.log("skills", user.skills)

// const objectKey = "name";

// console.log(user[objectKey]);
// console.log(user["name"]);


// Зміна значення властивості

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
// }

// user.city = "Lviv";
// user["age"] = 28;
// console.log(user);

// user.city = "Odessa";
// user["age"] = 38;
// console.log(user)



// Object freeze

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
// }

// Object.freeze(user);
// user.city = "Lviv";
// user.name = "Kate";
// console.log(user);


// Методи обʼєкта 

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
//         sayHello(city) {
//                 // console.log(city)
//                 console.log(`Hello, my name is ${this.name}`);
//         }
// }

// user.sayHello("Lviv")

// const obj = {
//         name: "Kate",
// }

// obj.sayHello = user.sayHello
// obj.sayHello()
// console.log(obj);


// Цикл for.... in

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
// }

// for (const key in user) {
//         console.log(key);
//         // console.log(user[key]);
// }



// Метод Object.keys()

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
//         age: 10
// }

// const keys = Object.keys(user)
// // console.log(keys);

// for (const key of keys) {
//         console.log(key, user[key]);
// }

// const pet = {
//         legs: 4,
// }

// const dog = Object.create(pet)
// dog.name = "Pess"
// // console.log(dog);
// // console.log(dog.name);
// // console.log(dog.legs);

// // for (const key in dog) {
// //         console.log(dog[key]);
// // }

// const keys = Object.keys(dog);
// // console.log(keys);

// for (const key of keys) {
//         console.log(key, dog[key]);
// }



// Метод Object.values()

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
// }

// const values = Object.values(user)
// // const values = Object.values(user.skills)
// console.log(values);



// Метод Object.entries()

// const user = {
//         name: "Alice",
//         skills: {
//                 html: true,
//                 css: false,
//                 react: false
//         },
// }

// // const entries = Object.entries(user)
// const entries = Object.entries(user.skills)
// console.log(entries);



// Завдання 1 
// Створи функцію яка буде приймати 3 параметри та формувати
// об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами 
// name, price, quantity, 
// totalPrice.

// function createBasket(product, quantity, price) {
//         const totalPrice = quantity * price;

// //         const basket = {
// //                 name: product,
// //                 price,
// // quantity,
// // totalPrice
// //         }
//         return {
//                 name: product,
//                 price,
// quantity,
// totalPrice
//         }
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("apple", 5, 200));


// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. 
// Функція приймає 1 параметр це об'єкт користувачів 
// де ключ це ім'я 
// користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки 
// було користувачів 
// та який середній час оренди комп'ютера.

// const players = {
//            Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//         const values = Object.values(players)
//         let total = 0;

//         for (const value of values) {
//                 total += value
//         }
//         console.log(total);
//         return `Count of players ${values.length}, average time ${total / values.length}`
// }

// console.log(getTime(players));


// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) 
// в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]

// function getUsers(arr, bookName) {
//         const userNames = [];
//         for (const user of arr) {
//                 // console.log(user.books);
//                 if (user.books.includes(bookName)) {
//                         userNames.push(user.name)
//                 }
                
//         }
//         return userNames.join(",")
// }

// console.log(getUsers(friends, "Harry Potter"));

// function getTotalAge(arr) {
//         let totalAge = 0;

//         for (const user of arr) {
//                 if ("age" in user) {
//                         totalAge += user.age
//                 }
//         }
//         return totalAge
// }

// console.log(getTotalAge(friends));


// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 
// параметр назву факультету 
// та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр
// назву факультету 
// та повертати кількість очків факультету

// const hogvarts = {
//         griffindor: [{
//                 name: "Harry",
//                 points: 17
//         },
//         {
//                 name: "Hermiona",
//                 points: 19
//         },
//         {
//                 name: "Ron",
//                 points: 14
//                 }],
        
//         slizerin: [{
//                 name: "Draco",
//                 points: 17
//         },
//         {
//                 name: "Goyl",
//                 points: 14
//         },
//         {
//                 name: "Crabbe",
//                 points: 5
//                 }],
        
//         getUserList(faculty) {
//                 if (!(faculty in this)) {
//                         return "Not found "
//                 }

//                 const students = [];
                
//                 for (const student of this[faculty]) {
//                         students.push(student.name)
//                 }
//                 return students.join(",")
//         }
        
//         getTotalPoints(faculty) {
//           if (!(faculty in this)) {
//                         return "Not found"
//           }
        
//         let totalPoints = 0;

//                 for (const student of this[faculty]) {
//                         if ("points" in student) {
//                                 totalPoints += student.points;
//        }
//                 }
//                 return totalPoints
//         }
// }


// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));


// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));




                //      Урок 3.2




                // Деструктуризація масива

// const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const second = arr[1];
// console.log(first);
// console.log(second);

// const [first, , third] = arr;
// console.log()



                // Деструктуризація обʼєктів

// const user = {
//         name: "Test name",
//         skills: {
//                 html: true,
//                 css: false,
//                 js: true
//         },
//         age: 25
// }

// console.log(user);

// const { name, skills, age } = user;
// console.log("name", name);
// console.log("skills", skills);
// console.log("age", age);



                //  Глибока деструктуризація обʼєкта


// const user = {
//         name: "Test name",
//         skills: {
//                 html: true,
//                 css: false,
//                 js: true
//         },
//         any: ["hope", "done", "more"]
// }

// const { skills: { html, css, js } } = user;
// console.log(html);
// console.log(css);
// console.log(js);

// const { any: [first, second, third] } = user;
// console.log(first);
// console.log(second);
// console.log(third);

               //   деструктуризація обʼєкта в параметрах функції

// const user = {
//         name: "Test name",
//         skills: {
//                 html: true,
//                 css: false,
//                 js: true
//         },
//         any: ["hope", "done", "more"]
// }

                //   Без деструктуризації

// function getUserName(obj) {
//          console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}`)
//  }

//  getUserName(user)

           //   З деструктуризацією

// function getUserName({ name, skills: { html } }) {
//          console.log(`Hello my name is ${name}, I know html - ${html}`)
// }
 
//  getUserName(user)




               //   деструктуризація обʼєкта в циклі

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];


//    Без деструктуризації

// const names = [];

// for (const user of users) {
//         names.push(user.name)
// }

// console.log(names)


//    з деструктуризацією


// 1
// const names = [];

// for (const {name} of users) {
//         names.push(name)
// }

// console.log(names)


// 2
// const names = [];

// for (const user of users) {
//         const { name } = user;
//         names.push(name)
// }

// console.log(names)


                    // Операція rest та spread
 
// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread - це ... (розгортає старий масив, бере данні і складає в новий масив)



// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; //rest - збирає данні, які залишилися в новий масив
// console.log(args)


// const obj = {
//         a: 1,
//         b: 2,
//         c: false,
// }

// const { a, b, ...args } = obj;
// console.log(args);


                    // Операція rest та spread в функціях

// const numbers = [1, 2, 3];

// function foo(...props) { //rest
        
// }

// foo(...numbers) //spread


// const names = ["Alice", "Kate", "Emma"];

// function foo(first, second, third) {
//         console.log("first", first)
//         console.log("second", second)
//           console.log("third", third)
// }

// foo(...names) //foo("Alice", "Kate", "Emma") - spread оператоп
//тотожно ось такому запису foo("Alice", "Kate", "Emma")



// function foo(apple, second, ...args) { //rest
//         console.log("first", apple)
//         console.log("second", second)
//         console.log(args);
// }

// foo("Alice", "Kate", "Emma", "Mila", "Victoria"); //spread


// const user = {
//         name: "test name",
//         age: 22,
//         city: "Lviv",
//         skills: {
//                 html: true,
//                 css: true,
//                 js: false
//         }
// }

// function foo({ name, age, ...props }) {
//         console.log(name);
//         console.log(age);
//         console.log(props);
// }

// foo(user)


// function foo({ name, skills: { html, ...props }, ...props2 }) {
//         console.log(name);
//         console.log(props);
//         console.log(props2);
//         console.log(html);
// }

// foo(user)



// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати 
// значення name, 
// surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// // Деструктуризація об'єкта для отримання окремих змінних
// const { username, profile: { name, surname }} = user


// // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);




// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта 
// product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo({name, price, category, details:{brand, color, weight}}) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);




// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, 
// щоб вона повертала новий об'єкт контакту з доданими 
// властивостями 
// id та createdAt, а також list зі значенням "default" 
// якщо в 
// partialContact немає такої властивості.

// function createContact(partialContact) {
//         return {
//                 id: Math.floor(Math.random() * 100),
//                 createdAt: new Date(),
//                 list: "default",
//                 ...partialContact
//        }

// }

// console.log(createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );

// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );




// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, 
// щоб вона повертала 
// новий об'єкт із властивістю fullName, 
// замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//         return {
//                 fullName: `${firstName} ${lastName}`,
//                 ...props

//         }
//         // console.log(props)

// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );





// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції 
// calculateHousePerimeter, 
// так щоб вона приймала об'єкт з параметрами будинку,
// включаючи довжини сторін будинку. 
// Функція повинна розрахувати та повернути периметр будинку.


//  function calculateHousePerimeter({sideA, sideB, sideC, sideD}) {
//    const perimeter = sideA + sideB + sideC + sideD
//          return perimeter;
// }

// const house = {
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15
// }

// const perimeter = calculateHousePerimeter(house);
// console.log(`Периметр будинку: ${perimeter}`);









                          // Урок 6.1



// const link = document.querySelector(".link");


// link.classList.add("special");

// link.classList.replace("special", "regular");

// console.log(link);


// Пошук HTML елементу за допомогою querySelector

                
// За назвою тегу
// const title = document.querySelector("h1");
// console.log(title);

// За назвою класу

// const title = document.querySelector(".js-title")
// console.log(title)

// За ID
// const title = document.querySelector("#title")
// console.log(title)

// const title = document.getElementById("title")
// console.log(title)

// const title = document.getElementsByClassName("js-title")
// console.log(title)




// Пошук HTML елементів за допомогою querySelectorAll


// const items = document.querySelectorAll(".js-items")

// Перетворення колекції до масиву

// console.log(Array.isArray([...items]))
// console.log(Array.from(items))



//     <!-- Створення HTML елементів -->

// const list = document.querySelector(".js-list")

// const li = document.createElement("li")
// const h2 = document.createElement("h2")

// h2.textContent = 'Hello world';

// li.append(h2)
// list.prepend(li)

// list.insertAdjacentElement("beforeend", li)

// console.log(list)




// Створення HTML елементів за допомогою шаблонної розмітки

// const list = document.querySelector(".js-list")

// const li = '<li>Hello world</li>'

// Метод insertAdjacentHTML

// list.insertAdjacentHTML("beforeend", li)
// console.log(list)


// Властивість innerHTML - затирає попередні данні

// list.innerHTML += li;
// console.log(list)





// Стилізація за допомогою властивості Style

// const list = document.querySelector(".js-list")

// list.style.listStyle = "none"
// list.style.color = "red"
// list.style.fontSize = "20px"




// Стилізація за допомогою властивості classList

// Метод add

// const list = document.querySelector(".js-list")

// list.classList.add("list")


// Метод remove

// list.classList.remove("list")

// Метод toggle

// list.classList.toggle("list")





// Системні атрибути 

// const btn = document.querySelector(".js-btn")

// btn.hidden = true;
// btn.hidden = false;

// btn.disabled = true;
// btn.disabled = false;


// Методи для роботи з атрибутами
// btn.setAttribute("hidden", true)
// btn.removeAttribute("hidden")
// console.log(btn.getAttribute("class"))





// Дата атрибути (кастомні атрибути, які ми задаємо самостійно)

// const btn = document.querySelector(".js-btn")

// btn.setAttribute("data-btn", 1)
// btn.setAttribute("data-btn-name", 2)
// // console.log(btn.dataset)

// const { button, btnName } = btn.dataset

// console.log("button", button);
// console.log("btnName", btnName);



// Завдання 

// Потрібно створити розмітку з картками автомобілів.
// Для створення потрібно зробити масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//         },
//    {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// Варіант 1 

// const list = document.querySelector(".js-list")

// function createMarkup(arr){
//         const markup = arr.map(({ id, model, type, price, img }) => {
//         const li = document.createElement("li")
//                 const imgEl = document.createElement("img");
//                 const h2 = document.createElement("h2");
//                 const h3 = document.createElement("h3");
//                 const span = document.createElement("span");

//                 li.setAttribute("data-car-id", id)

//                 imgEl.src = img;
//                 imgEl.alt = type;
//                 imgEl.style.width = "300px";


//                 h2.textContent = model;
//                 h3.textContent = type;
//                 span.textContent = price;

//                 li.append(imgEl, h2, h3, span)

//                 return li;
//         });

//         // console.log(markup);
//         list.append(...markup)
// }

// createMarkup(cars)

// Варіант 2 

// const list = document.querySelector(".js-list")

// function createMarkup(arr) {
//         const markup = arr.map(({ id, model, price, type, img }) => `
//         <li data-car-id="${id}">
//         <img src="${img}" alt="${type}" width="300"/>
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <span>${price}</span>
//         </li>
//         `).join("")
// // console.log(markup)
//  list.insertAdjacentHTML("beforeend", markup)
// }

// createMarkup(cars)





                        // Урок 6.2


// Подія click

// const btn = document.querySelector(".js-click")
// const box = document.querySelector(".js-box")

// btn.addEventListener("click", handleClick)
// box.addEventListener("click", handleClick)

// let step = 0;
// function handleClick() {
//         // console.log("ok")
//         step += 50;
//         box.style.marginTop = `${step}px`;
//          box.style.marginLeft = `${step}px`;
// }


// Подія input

// const userName = document.querySelector(".js-user-name")

// userName.addEventListener("input", handleInput)

// function handleInput(event) {
//         console.log(event.target.value);

// }


// Подія Blur

// const userName = document.querySelector(".js-user-name")

// userName.addEventListener("blur", handleBlur)

// function handleBlur(event) {
//         const name = event.currentTarget.value;

//         alert(`Hello ${name}`)
// }


// Подія submit



// Подія keydown / keyup / keypress

// const box = document.querySelector(".js-box")
// document.addEventListener("keydown", handleKey);

// function handleKey(event) {
//         // console.log("key", event.key)
//         // console.log("code", event.code)

//         if (event.code === `Escape`) {
//                 console.log("ok")     
//         }
//         else {
//                 console.log(false);
//         }
// }

// function handleKey(event) {
//         if (event.code === `Escape`) {
//                 box.style.display = "none"
//         }
// }



// Обробка комбінацій клавіш 

// document.addEventListener("keydown", handleKey);

// function handleKey(event){
//         // console.log(event.ctrlKey);
//         if (event.ctrlKey && event.code === "KeyC") {
//                 console.log("ok");
//         }
// }



// Завдання 1

// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для 
// пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або
// Моделі авто і в тегу селект обрати що він ввів Марку 
// або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми)
// відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//         {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
// {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];



// const form = document.querySelector(".js-form")
// const container = document.querySelector(".js-list")

// function createMarkup(arr) {
//     return arr.map(({ id, car, type, price, img }) => `
//         <li class="car-card" data-id="${id}">
//             <img src="${img}" alt="${type}" class="car-image">
//             <h2 class="car-title">${car}</h2>
//             <h3 class="car-type">${type}</h3>
//             <span class="car-price">${price}</span>
//         </li>
//     `).join("")
// }

// createMarkup(cars)

// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.gap = "25px";
// container.insertAdjacentHTML("beforeend", createMarkup(cars))

// form.addEventListener("submit", handleSubmit)

// function handleSubmit(event) {
//         event.preventDefault()

//         const { query, options } = event.target.elements;

//         // console.log("query", query.value);
//         // console.log("options", options.value);

//         //   console.log(cars[5][options.value]);

//         const result = cars.filter(item => 
//                 item[options.value].toLowerCase().includes(query.value.toLowerCase())
//         )
//   container.innerHTML = createMarkup(result)
// }





                        //        Урок 7.1


// const container = document.querySelector(".js-container");
// // console.log(container);


// [...container.childNodes].forEach(item => {
// //        console.log(item) 
// })


//Приклад стилізацію одночасно усіх елементів з дз

// const h2 = document.querySelectorAll("h2")

// h2.forEach(item => {
//         item.style.color = "red";
// });



                    // Делегування подій
//Отримай колір квадратика, по яку було здійснено клік


// Приклад без делегування 

//  const container = document.querySelector(".js-container");

//  [...container.children].forEach(item => {
//        item.addEventListener("click", handleClick) 
// })


// function handleClick(event) {
//         const color = event.currentTarget.dataset.color;
//         console.log(color);
// }


// Приклад з делегуванням

// const container = document.querySelector(".js-container");

// container.addEventListener("click", handleClick)

// function handleClick(event) {
//         if (event.target === event.currentTarget) {
//                 return;
//         }
//         // console.log("currentTarget", event.currentTarget);
//         // console.log("target", event.target);
        
//         if (!event.target.classList.contains("js-box")) {
//                 return;
//         }

//         const color = event.target.dataset.color;
//         console.log(color);
// };



//StopPropagation 

// const red = document.querySelector(".box-red")
// const green = document.querySelector(".box-green")
// const black = document.querySelector(".box-black")

// red.addEventListener("click", handleClick)
// green.addEventListener("click", handleClick)
// black.addEventListener("click", handleClick)

// function handleClick(event) {
//         const isConfirm = confirm(`click on element ${event.currentTarget.id} call stopPropagation`);

//         if (isConfirm) {
//                 event.stopPropagation()
//         }
// }



// StopImmediatePropagation


// const red = document.querySelector(".box-red")

// red.addEventListener("click", firstClick)
// red.addEventListener("click", secondClick)
// red.addEventListener("click", thirdClick)

// function firstClick(event) {
//         console.log("firstClick");

//         const isConfirm = confirm(`call stopImmediatePropagation`)

//         if (isConfirm) {
//                 event.stopImmediatePropagation()
//         }
// }

// function secondClick(event) {
//         console.log("secondClick");

//         const isConfirm = confirm(`call stopImmediatePropagation`)

//         if (isConfirm) {
//                 event.stopImmediatePropagation()
//         }
// }

// function thirdClick(event) {
//         console.log("thirdClick");

//         const isConfirm = confirm(`call stopImmediatePropagation`)

//         if (isConfirm) {
//                 event.stopImmediatePropagation()
//         }
// }


// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, 
// приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно 
// з детальною 
// інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай 
// бібліотеку basicLightbox 
// (https://github.com/electerious/basicLightbox)


// const products = [
//     {
//       id: 1,
//       img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
//       name: "Монітор",
//       price: 3000,
//       description: "23-дюймовий монітор з Full HD роздільною здатністю.",
//     },
//     {
//       id: 2,
//       img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
//       name: "Ноутбук",
//       price: 20000,
//       description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
//     },
//     {
//       id: 3,
//       img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
//       name: "Смартфон",
//       price: 8000,
//       description: "Оснащений потрійною камерою та багатоядерним процесором.",
//     },
//     {
//       id: 4,
//       img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
//       name: "Планшет",
//       price: 12000,
//       description:
//         "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
//     },
// ];

// const container = document.querySelector(".js-products");

// container.insertAdjacentHTML("beforeend", createMarkup(products))
// container.addEventListener("click", handleClick)

// function createMarkup(arr) {
//         return arr.map(({ id, img, name, price, description }) => `
//                 <li data-id="${id}" class="item js-product-item">
//                      <img src="${img}" alt="${name}" width="300px"/>
//                      <h2>${name}</h2>
//                      <p>Price: ${price}</p>
//                 </li>
//         `).join("")
// };

// console.log(createMarkup(products));

// function handleClick(event) {
//         if (event.target === event.currentTarget) {
//                 return;
//         }

//         const currentProduct = event.target.closest(".js-product-item"); //цей метод повертає найближчий батьківський елемент з вказаним класом
//         // console.log("currentTarget", event.currentTarget);
//         // console.log("target", event.target);
//         // console.log(currentProduct);

//         const id = currentProduct.dataset.id;
//         // console.log(id);

//         // console.log(typeof id);

//         const product = products.find(({ id: productId }) => productId === Number(id));

//         // console.log(product);


//         const instance = basicLightbox.create(`
//         <div class="modal">
//             <img src="${product.img}" alt="${product.name}"/>
//             <h2>${product.name}</h2>
//             <h3>${product.price}</h3>
//             <p>${product.description}</p>
//         </div>
//         `)
        
//         instance.show()
// }




                //       Урок 7.2


//Throttle & Debounce

// const input = document.querySelector(".js-search");

// console.log(window);

// input.addEventListener("input", _.throttle(handleInput, 1000, {
//         leading: true,
//         trailing: true
// }))

// function handleInput(event) {
//         console.log(event.target.value);
// }

// input.addEventListener("input", _.debounce(handleInput, 1000, {
//         leading: true,
//         trailing: true
// }))

// function handleInput(event) {
//         console.log(event.target.value);
// }


// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера
// з класом "content", 
// для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для
// можливості ходу.
// Скріпт має самостійно визначати переможця гри та
// виводити модальне вікно
// з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно
// щоб кожна клітинка
// ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації,
// список всіх можливих виграшних комбінацій знаходиться
// в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

// const combination = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7],
//     [3, 6, 9]
// ]

// const content = document.querySelector(".content")
// const historyX = [];
// const historyO = [];

// let player = "X";

// content.addEventListener("click", handleClick)

// function createMarkup() {
//         let markup = ""
//         for (let i = 1; i <= 9; i++){
//                 markup += `<div class="item" data-id="${i}"></div>`
//         }


//         content.innerHTML = markup;
// }

// createMarkup();

// function handleClick(event) {
//         if (event.target === event.currentTarget || event.target.textContent) {
//                 return;
//         }

//         const id = +event.target.dataset.id // const id = Number(event.target.dataset.id)
        // console.log(id);

//         let isWinner = false;

//         if (player === "X") {
//                 historyX.push(id);
//                 isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
//         } else {
//                 historyO.push(id);
//                 isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
//         }

//         if (isWinner) {
//                 const instance = basicLightbox.create(`
//                 <div class="box">
//                           <h1>Player - ${player} is winner</h1>
//                 </div>
//                 `)

//                 instance.show()
//                 resetGame();
//                 return;
//         }


//         event.target.textContent = player;
//         player = player === "X" ? "O" : "X";

//         const lose = [...content.children].every(item => item.textContent);
//         if (lose) {
//                 resetGame();
//         }
// }
        

// function checkWinner(arr) {
//         return combination.some(item => item.every(id => arr.includes(id)))
        
// }

// console.log([1, 2, 3].every(id => id > 2));


// function resetGame() {
//         createMarkup();
//         player = "X";
//         historyX.splice(0);
//         historyO.splice(0);
// }

