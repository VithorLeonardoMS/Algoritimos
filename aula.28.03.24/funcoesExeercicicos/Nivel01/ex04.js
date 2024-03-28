//Verificar se um número é par ou ímpar: Escreva uma função que receba um número e verifique se é par ou ímpar, retornando true para par e false para ímpar. Você deve usar return.
let imparOrPar = (num1) => {
    if(num1 % 2 === 0){
        return true
    } else if(num1 % 2 > 0 || num1 % 2 < 0){
        return false
    } else {
        return "Não é um número"
    }
}
console.log(`É par? ${imparOrPar(2)}`)