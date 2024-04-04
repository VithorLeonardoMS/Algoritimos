//Vogais em uma String: Escreva um programa que imprima todas as vogais de uma string.
let string = 'Criança felizes rodam em volta de um alto poste enquanto sua juventude lhe es arrancada aos poucos, rodam, rodam, rodam...'
let comoArray = string.split("")

function inverso(array){

   let novaArray= []
   let teste = 1
   while(teste <= array.length){
   novaArray.push(array[(array.length - teste)])
   teste = teste + 1
   }
   return novaArray
   }

function retiraConsoantes(array){
   let total = array.length
   let novo = []
   while(-1 < total){
    if(array[total] === 'a' || array[total] === 'e' || array[total] === 'i' || array[total] === 'o' || array[total] === 'u'){
        novo.push(array[total])
    }
    total--
   }
   return novo
}
console.log((inverso(retiraConsoantes(comoArray))).join(''))

