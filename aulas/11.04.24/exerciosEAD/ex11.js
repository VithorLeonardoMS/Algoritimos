
const readlineSync = require('readline-sync');

const randomNum = (Math.floor(Math.random() * 101))
console.log('Estou pensando em um número de 1 a 100, tente advinhar')
let resposta = Number(readlineSync.question('De seu palpite:'))

while(resposta != randomNum){
    if(resposta > randomNum){
        console.log(`${resposta} -> maior que o numero aleartorio`)
    } else {
        console.log(`${resposta} -> menor que o numero aleartorio`)
    }
    resposta = readlineSync.question('De seu palpite:');
    resposta = Number(resposta)

}
console.log(`Resposta certa, parabéns! o número aleartório éra ${randomNum}`)

