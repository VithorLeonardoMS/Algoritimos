
/*npm install-readline-sync

//Crie uma váriavel que vai referencia a biblioteca
const readlineSync = require('readline-sync');

//Fazendo perguntas e armazenando as respostas
const nome = readlineSync.question('Qual o seu nome? ');
const idade = readlineSync.question('Qual a sua idade? ');
const cidade = readlineSync.question('Qual a sua cidade? ');


console.log('nome:' + nome);
console.log('idade:' + idade);
console.log('Cidade:' + cidade);
*/

const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual o seu nome? ');
const idade = readlineSync.question('Qual a sua idade? ');
const cidade = readlineSync.question('Qual a sua cidade? ');

console.log('nome:' + nome);
console.log('idade:' + idade);
console.log('Cidade:' + cidade);