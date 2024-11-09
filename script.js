'use strict';

let title = prompt('Как называется ваш проект?');
console.log(title);

let screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные'
);
console.log(screens);

let screenPrice = +prompt('Сколько будет стоить данная работа?', 1200);
console.log(screenPrice);

let adaptive = prompt('Нужен ли адаптив на сайте?');

if (adaptive == 'Да') {
  console.log(true);
} else if (adaptive == 'да') {
  console.log(true);
} else {
  console.log(false);
}

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollback = 4;
let servicePercentPrice = Math.round(fullPrice - (fullPrice * rollback) / 100);
console.log(servicePercentPrice);

switch (true) {
  case fullPrice > 30000:
    console.log('Даем скидку в 10%');
    break;
  case fullPrice > 15000 && fullPrice < 30000:
    console.log('Даем скидку в 5%');
    break;
  case fullPrice < 15000 && fullPrice > 0:
    console.log('Скидка не предусмотрена');
    break;
  case fullPrice <= 0:
    console.log('Что-то пошло не так');
}
