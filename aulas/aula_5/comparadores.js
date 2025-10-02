const variavel1 = 50
const variavel2 = 35
//Igual: ===
//Verifica se dois valores são iguais
console.log(variavel1 === (2*25)) //true
console.log(variavel1 === 50) //true
console.log(variavel1 === variavel2) //false

//Diferentes: !==
//Verifica se dois valores são diferentes
console.log(variavel1 !== variavel2)//true

//Maior: >
//Verifica se o valor da esquerda é maior que o valor da direita
console.log(variavel1 > variavel2) //true
console.log(variavel2 > variavel1) // false

//Maior ou igual: >=
//Verifica se o valor da esquerda é maior OU é igual ao valor da direita
console.log(variavel1 >= variavel2) //true
console.log(50 >= 35) //true
console.log(50 >= 50) //true
console.log(35 >= 50) //false

//Menor: <
//Verifica se valor da esuquerda é menor que o da direita
console.log(variavel1 < variavel2) //false
console.log(23 < 90) //true

//Menor ou igual: <=
//Verifica se o valor da esuqerda é menor OU igual ao da esquerda
console.log(variavel1 <= variavel2) //false
console.log(variavel1 <= 50) //true

//Crie duas variáveis que guardem dois números. Imprima na tela as seguintes mensagem:
/*
O primeiro número é igual ao segundo? True/False
O primeiro número é diferente que o segundo? True/False
O primeiro número é maior  que o segundo? True/False
O primeiro número é maior que o segundo? True/False
 */