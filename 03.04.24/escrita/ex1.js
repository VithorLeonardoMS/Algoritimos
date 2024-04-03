

const readlineSync = require('readline-sync');

const emailDoUsuario = readlineSync.question('Qual seu email? ');
const nomeDoUsuario = readlineSync.question('Qual seu nome? ');

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);