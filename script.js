const title = 'Lesson02';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 30;
const rollback = 4;
const fullPrice = 100;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' долларов');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');

console.log(screens.toLowerCase());
console.log(screens.split(', '));

console.log((fullPrice * rollback) / 100);
