const chifru = [4, 5, 3, 5, 2, 4, 5, 3];
const cr = chifru.reduce((acc, chifru) => acc + chifru, 0);
const ave = cr/chifru.length;
console.log(ave.toFixed(2));

const be = chifru.filter(chifru => chifru > 3);
const chifrusr = be.map(chifru => 'оцiнка ' + chifru);
console.log(chifrusr)

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
fruits.sort();
console.log(fruits.join(', '));

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];
const p = products.filter(p => p.price < 10000);
console.log(p)

const names = products.map(p => p.name);
console.log(names);

const sum = products.reduce((acc, p) => acc + p.price, 0);
console.log(sum)

const chirik = [12, 45, 7, 33, 18];
console.log(chirik.some(n => n > 40));
console.log(chirik.every(n => n > 5));
