/*
2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/
function soma(a,b){
    return a + b
}
console.log(soma(1,2))
const maiorOuIgual = function(a,b){
    return a >= b
}
console.log(maiorOuIgual(2,2))
const parOuImpar = (x) => {
    if((typeof(x) !== "number")){
        console.log('Não é um número')
    } else if(x === 0){
        console.log('É zero, ou seja, neutro')
    } else if(x%2===0){
        console.log('É par')
    } else {
        console.log('É impar')
    }
}
parOuImpar(2)
const letras = function(string){
    return string.length
}
console.log(letras("abc"))
