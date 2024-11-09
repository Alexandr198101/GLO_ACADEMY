'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные'
);
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let adaptive = prompt('Нужен ли адаптив на сайте?');
if (adaptive == 'Да') {
  console.log(true);
} else if (adaptive == 'да') {
  console.log(true);
} else {
  console.log(false);
}
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?', 3000);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?', 5000);

const rollback = 4;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
let getFullPrice = function () {
  return screenPrice + allServicePrices;
};
let getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().toLocaleLowerCase();
};
let getServicePercentPrices = function () {
  fullPrice - (fullPrice * rollback) / 100;
};

let showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

let getRollBackMassage = function () {
  if (fullPrice >= 30000) {
    return 'Даем скидку в 10%';
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return 'Даем скидку в 5%';
  } else if (fullPrice < 15000 && fullPrice >= 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что-то пошло не так';
  }
};

allServicePrices = getAllServicePrices;
fullPrice = getFullPrice;
title = getTitle;
servicePercentPrice = getServicePercentPrices;

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
