// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// Щоб створити масив, що складається з усіх цілих чисел від значення `min` до `max` включно,
//     можна використати цикл `for` та метод `push()`.
// Отже, код функції `createArrayOfNumbers` буде наступним:

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

// Тепер, при виклику`createArrayOfNumbers(1, 3)`, отримаємо масив`[1, 2, 3]`,
// при виклику`createArrayOfNumbers(14, 17)` - масив`[14, 15, 16, 17]`,
// при виклику`createArrayOfNumbers(29, 34)` - масив`[29, 30, 31, 32, 33, 34]`.
