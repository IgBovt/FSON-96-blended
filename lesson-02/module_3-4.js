// ! Масиви
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const style = ["Джаз", "Блюз"];
// style.push("Рок-н-рол");
// const i = style.indexOf("Блюз");
// style[i] = "Класика";
// // style[1] = "Класика";

// console.log(style.shift());
// style.unshift("Реп", "Реггі");

// const index = style.indexOf("Класика");

// console.log(style.slice(index, 3));

// const array = [1, 2]
// const newArray = array.concat(style);
// console.log(newArray);

//TODO:=========task-02=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
//  const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
//  const elem = 'SS';
//  const index=array.indexOf(elem);
//  index===-1?array.push(elem): array.splice(index,1);
//  console.log(array);

//TODO:=========task-03=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers) && numbers.length !== 0) {
//     // throw new Error("Arguments must be an array!");
//     return "Arguments must be an array!";
//   }

//   let min = numbers[0];

//   for (const number of numbers) {
//     if (number < min) {
//       min = number;
//     }
//     // console.log(number);
//   }
//   return min;
// }

// console.log(findSmallerNumber(7, 78, 989, 565)); // 2

//TODO:============task-04==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Arguments must be numbers!";
//   }
//   return a < b ? a : b;
// }

// const result = min(10, 5);

// console.log(result); // 5

//TODO:============task-05==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// logItems(musicGenres);

//TODO:=============task-06=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-07=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
// //  const args = arguments;
// let sum = 0;
// let totalCount = 0;
// for (const arg of args) {
//     if (typeof arg !== "number") {
//         continue;
//     }
//     sum += arg;
//     totalCount += 1;
// }
//  return sum / totalCount;
// }

// console.log(calculateAverage(10, 10, 20, "200"));

//TODO:=============task-08=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

// const str = "This is a new line";
// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels(string) {
//   let count = 0;
//   for (const letter of string) {
//     count += vowels.includes(letter) ? 1 : 0;
//   }
//   return `Містить ${count} голосних`;
// }
// console.log(countVowels(str));

//TODO:=============task-09===============================================================
// Написати функцію, яка приймає два параметри - рядок та символ - і повертає новий рядок,
// в якому всі входження символу в початковому рядку замінені на пустий рядок.

// console.log(
//   newString(
//     'Написати функцію, яка приймає два параметри - рядок та символ - і повертає новий рядок,в якому всі входження символу в початковому рядку замінені на пустий рядок',
//     'а'
//   )
// );

//!  Літерал об'єкта
//!  Властвості та методи об'єкта

//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

//TODO:============task-2==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const square = {
//   width: 20,
//   heigth: 15,
//   calculateArea() {
//     return this.width * this.heigth;
//   },
// };

// const squareA = Object.create(square);
// squareA.heigth = 30;
// squareA.width = 30;

// console.log(square);
// console.log(squareA);
// console.log(square.calculateArea());
// console.log(squareA.calculateArea());

//TODO:============task-3==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// console.log(store.hasProduct('apple'));

//TODO:============task-4==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// console.log('object :>> ', cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-5======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// console.log(getBool(obj, 'car')); // true

//TODO:============task-6======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// console.log(sum);

//TODO:============task-7======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// changeObject(user);

//TODO:============task-8======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-9==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(findTopStudent(students));

//TODO:============task-10==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);
