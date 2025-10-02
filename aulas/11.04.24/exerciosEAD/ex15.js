
const readlineSync = require('readline-sync');

const frase = readlineSync.question('Frase: ');

let vogais = 0
let consoantes = 0

function comando(frase){
let fraseT = frase.split('')

for(i=0;i<fraseT.length;i++){
    if(fraseT[i].toLowerCase().includes('a')){
        vogais = vogais + 1
    } else if(fraseT[i].toLowerCase().includes('b'||'c'||'d'||'f'||'g'||'h'||'j'||'k'||'l'||'m'||'n'||'p'||'q'||'r'||'s'||'t'||'v'||'w'||'x'||'y'||'z')){
        consoantes += 1
    }
}

}
comando(frase)

console.log(consoantes, vogais)
//Codigo ineficiente