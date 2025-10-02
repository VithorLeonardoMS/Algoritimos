/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores passados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digame o primeiro número: ' , (num1) => {
    rl.question('Digame o segundo número: ' , (num2) => {
        num1 = Number(num1)
        num2 = Number(num2)
    let soma = num1 + num2
    let subtração = num1 - num2
    let divisão = num1 / num2
    let multiplicação = num1 * num2
    console.log(`Soma: ${soma}`)
    console.log(`Subtração: ${subtração}`)
    console.log(`Multiplicação: ${multiplicação}`)
    console.log(`Divisão: ${divisão}`)


rl.close();
})})