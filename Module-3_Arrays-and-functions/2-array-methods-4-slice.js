// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]

// Для того, щоб отримати часткову копію масиву, можна скористатися методом slice().
// Цей метод повертає новий масив, який містить елементи вихідного масиву, починаючи з індексу `start` і закінчуючи індексом`end - 1`.
//     Якщо `start` не вказано, то він приймає значення 0. Якщо `end` не вказано, то він приймає значення довжини масиву.Я
// кщо `start` або `end` є від'ємними числами, то вони вважаються відліком з кінця масиву.

// Отже, код для отримання часткових копій масиву `fruits` буде наступним:

const fruits = ["apple", "plum", "pear", "orange", "banana"];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

// Тепер, при виклику`firstTwoEls`, отримаємо масив`["apple", "plum"]`,
//     при виклику`nonExtremeEls` - масив`["plum", "pear", "orange"]`,
//     а при виклику`lastThreeEls` - масив`["pear", "orange", "banana"]`.
