// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// Оголошена функція getSlice(array, value)
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []
//
//=============================================================================================================================================================

// Для того, щоб знайти елемент у масиві та повернути підмасив, що починається з початку масиву і до елемента зі значенням value включно,
// можна скористатися методом `slice()` та методом `indexOf()`¹.Метод `indexOf()` повертає індекс першого елемента у масиві,
// який має значення, рівне переданому параметру.Якщо такого елемента немає, метод повертає - 1.
// Якщо індекс елемента зі значенням value більший або дорівнює 0, можна використати метод `slice()` для створення підмасиву,
// що починається з початку масиву і до елемента зі значенням value включно.Якщо індекс елемента зі значенням value менший за 0,
// можна повернути порожній масив.

// Отже, код функції `getSlice` буде наступним:

function getSlice(array, value) {
  const index = array.indexOf(value);
  if (index >= 0) {
    return array.slice(0, index + 1);
  } else {
    return [];
  }
}

// Тепер, при виклику`getSlice(["Mango", "Poly", "Ajax"], "Poly")`, отримаємо масив`["Mango", "Poly"]`,
//     при виклику`getSlice(["Mango", "Poly", "Ajax"], "Ajax")` - масив`["Mango", "Poly", "Ajax"]`,
//     при виклику`getSlice(["Mango", "Poly", "Ajax"], "Mango")` - масив`["Mango"]`,
//     при виклику`getSlice(["Mango", "Poly", "Ajax"], "Jacob")` - порожній масив,
//     а при виклику`getSlice(["Mango", "Poly", "Ajax"], "Casey")` - порожній масив.