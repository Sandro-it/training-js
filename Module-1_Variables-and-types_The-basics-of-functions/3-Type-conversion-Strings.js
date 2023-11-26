// Оголоси змінну message і запиши в неї повідомлення про покупку.

// Це буде рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits", де

// <назва товару> — це значення змінної productName
// <ціна товару> — це значення змінної pricePerItem
// Використовуй синтаксис шаблонних рядків. Уникай зайвих символів (пробілів, коми або крапки, що не передбачені вмістом рядка).

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits`;
