const readlineSync = require('readline-sync');

const pergunta1 = Number(readlineSync.question('Digame numeros e te direi a soma, até que o numero seja zero. '))

if(pergunta1 === 0){
    console.log(pergunta1)
}else{
let pergunta
let total = pergunta1

while(pergunta !== 0){
    pergunta = Number(readlineSync.question('Proximo: '))
    total += pergunta
}
if(total >= 0 || total <= 0){
console.log(total)
}else{
    console.log('Erro')
}
}