//Encontrar o menor número entre dois: Crie uma função que receba dois números e retorne o menor deles. Você deve usar return.
let menorNumero = function(num1, num2) {

if(num1 > num2 ){
    return num2
} else {
    return num1
}
}
console.log(menorNumero(1,2))