'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 4;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор стоимости');
  screens = prompt(
    'Какие типы экранов нужно разработать?',
    'Простые, Сложные, Интерактивные'
  );
  screenPrice = prompt('Сколько будет стоить данная работа?');

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?', 'да/нет');
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    const numberChecks = () => {
      let n = 0;
      do {
        n = +prompt('Сколько это будет стоить?');
      } while (!isNumber(n));
      return +n;
    };
    sum += numberChecks();
  }
  return sum;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function () {
  return (
    title.trim()[0].toUpperCase() + title.trim().substr(1).toLocaleLowerCase()
  );
};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * rollback) / 100;
};

const getRollbackMessage = function () {
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getFullPrice());
console.log('allServicePrices', allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);

console.log(
  'Стоимость верстки экранов' +
    screenPrice +
    'рубли и Стоимость разработки сайта' +
    fullPrice +
    'рубли'
);
