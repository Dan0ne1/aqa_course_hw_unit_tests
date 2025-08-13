"use strict";

/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowelsCount = 0;
let consonantsCount = 0;

// Перебираем каждую букву слова
for (let i = 0; i < word.length; i++) {
  let letter = word[i].toLowerCase(); 
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    vowelsCount++;
  } else {
    consonantsCount++;
  }
}

// Формируем итоговую строку
vowelsAndConsonantsResult = word + ' contains ' + vowelsCount + ' vowels and ' + consonantsCount + ' consonants';

console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };