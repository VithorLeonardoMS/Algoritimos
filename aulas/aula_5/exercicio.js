/*Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:
O nome da pessoa
A idade dessa pessoa
Um true ou false que diz se ela é maior de idade
Quantos anos ela terá em 2050
*/
let nome = 'Vithor'
let nascimentoAno = 2007
let anoAtual = 2024
let anosFuturos = 2050 - nascimentoAno
const idade = anoAtual - nascimentoAno
const trueOrFalse = idade < 18
console.log('Meu nome é', nome, ', tenho', idade, 'anos de idade. Sou menor de idade?', trueOrFalse, '. em 2050 teria' ,anosFuturos, 'anos.')

