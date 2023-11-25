// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
