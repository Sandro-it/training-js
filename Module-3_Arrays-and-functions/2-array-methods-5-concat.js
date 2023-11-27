// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
// що складається з усіх елементів масивів oldClients і newClients.
// Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

//=======================================================================================================================================================

// Щоб створити масив, що складається з усіх елементів масивів `oldClients` і`newClients`, можна скористатися методом `concat()`.
// Цей метод повертає новий масив, який містить елементи обох масивів.Щоб спочатку додати елементи з масиву`oldClients`,
// а потім з`newClients`, слід викликати метод `concat()` на масиві `oldClients` і передати `newClients` як аргумент.
// Отже, код буде наступним:

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

// Тепер, при виклику `allClients`, отримаємо масив `["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]`.
