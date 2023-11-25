// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта.
// Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// Оголошена функція getOrderQuantity(order)
// Виклик getOrderQuantity(["apple", "peach", "pear", "banana"]) повертає 4
// Виклик getOrderQuantity(["apple", "banana"]) повертає 2
// Виклик getOrderQuantity(["apple", "banana", "pear"]) повертає 3
// Виклик getOrderQuantity([]) повертає 0

function getOrderQuantity(order) {
  return order.length;
}
