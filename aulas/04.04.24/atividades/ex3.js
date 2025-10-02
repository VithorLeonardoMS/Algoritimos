function inverso(array){
 //return [array[4],array[3],array[2],array[1],array[0],]
//maneira mais correta:
let novaArray= []
let teste = 1
while(teste <= array.length){
novaArray.push(array[(array.length - teste)])
teste = teste + 1
}
return novaArray
}
let letras = ['a','b','c','d','e']
console.log(inverso(letras))