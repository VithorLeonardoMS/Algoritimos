const readlineSync = require('readline-sync');

let usuarioResp = readlineSync.question('Escolha "cara" ou "coroa": ')

const randomNum = (Math.floor(Math.random() * 2))
let moeda
if (randomNum === 0 ){
    moeda = 'cara'
    console.log('A moeda caiu em: cara')
} else{
    moeda = 'coroa'
    console.log('A moeda caiu em: coroa')
}

if(usuarioResp === moeda){
    console.log('Você ganhou!')
} else {
    console.log('Você perdeu')
}