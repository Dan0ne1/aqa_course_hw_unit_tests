"use strict";

/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function checkUniquePizzas(myPizzas) {
  let resultUnique = [];
  let resultNull = null;

  // Приводим все названия к нижнему регистру для корректного сравнения
  const competitorPizzasLower = [];
  for (const pizza of competitorPizzas) {
    competitorPizzasLower.push(pizza.toLowerCase());
  }

  for (const pizza of myPizzas) {
    if (!competitorPizzasLower.includes(pizza.toLowerCase())) {
      resultUnique.push(pizza);
    }
  }

  // Если resultUnique пуст, значит все пиццы есть у конкурента
  if (resultUnique.length === 0) {
    resultNull = null;
    resultUnique = null;
  }

  return { resultUnique, resultNull };
}

// Проверяем для myPizzasT1
const resultT1 = checkUniquePizzas(myPizzasT1);
console.log('Для myPizzasT1:', resultT1);

// Проверяем для myPizzasT2
const resultT2 = checkUniquePizzas(myPizzasT2);
console.log('Для myPizzasT2:', resultT2);

export { resultNull, resultUnique };