/*
Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
*/

let novaArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indice
if(novaArray[0] === 'Abacaxi'){
indice = 0
}
if(novaArray[1] === 'Abacaxi'){
    indice = 1
}
if(novaArray[2] === 'Abacaxi'){
    indice = 2
    }
if(novaArray[3] === 'Abacaxi'){
indice = 3
}
if(novaArray[4] === 'Abacaxi'){
    indice = 4
    }
console.log('O indice de abacaxi é', indice, 'E o tamanho é', novaArray[indice].length)

/*
Outra coisa nada a ver
if(novaArray[4]!== 'Abacaxi'){
    novaArray.splice(4,1)
}

if(novaArray[3]!== 'Abacaxi'){
    novaArray.splice(3,1)

}

if(novaArray[2] !== 'Abacaxi'){
    novaArray.splice(2,1)
 }
 
 if(novaArray[1] !== 'Abacaxi'){
    novaArray.splice(1,1)
}

if(novaArray[0] !== 'Abacaxi'){
 novaArray.splice(0,1)
}

*/





