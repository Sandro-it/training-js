// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// Оголошена функція getLastElementMeta(array)
// Виклик getLastElementMeta(["apple", "peach", "pear", "banana"]) повертає [3, "banana"]
// Виклик getLastElementMeta(["apple", "peach", "pear"]) повертає [2, "pear"]
// Виклик getLastElementMeta(["apple", "peach"]) повертає [1, "peach"]
// Виклик getLastElementMeta(["apple"]) повертає [0, "apple"]

function getLastElementMeta(array) {
  const lastElementIndex = array.length - 1;
  const lastElementValue = array.slice(-1)[0];
  return [lastElementIndex, lastElementValue];
}
