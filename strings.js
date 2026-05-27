const sentence = "javascript—это просто!";
const trimSentence = sentence.trim();
const toptrim = trimSentence[0].toUpperCase()+trimSentence.slice(1);
console.log(toptrim);

const name = "Иван";
const surname = "Иванов";
const group = "21-ИСР";
const Score = "4.75";
console.log(`Студент ${surname} ${name}, группа ${group}, средний балл: ${Score}.`);

const date = "2025-03-15";
const dateparts = date.split('-');
console.log(`${dateparts[2]}.${dateparts[1]}.${dateparts[0]}`)

const developer = "Node.js разработчик";
const startwithnode = developer.startsWith("Node");
const endwithdeveloper = developer.endsWith("разработчик");
console.log(startwithnode);
console.log(endwithdeveloper)

const numbers = 42;
console.log(numbers.toString().padStart(8,'0'));

