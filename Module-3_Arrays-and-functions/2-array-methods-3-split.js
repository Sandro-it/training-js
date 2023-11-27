// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// Для того, щоб розрахувати загальну вартість гравірування, можна використати метод `split()` для розділення рядка на масив слів,
//   а потім використати властивість `length` для підрахунку кількості слів.Далі, можна помножити кількість слів на ціну за слово,
//     щоб отримати загальну вартість гравірування.

// Отже, код функції `calculateEngravingPrice` буде наступним:

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
}

// Тепер, при виклику функції`calculateEngravingPrice("JavaScript is in my blood", 10)`, отримаємо 50,
//   при виклику`calculateEngravingPrice("JavaScript is in my blood", 20)` - 100,
//   при виклику`calculateEngravingPrice("Web-development is creative work", 40)` - 160,
//     а при виклику`calculateEngravingPrice("Web-development is creative work", 20)` - 80.
