//Verificar se um número é positivo, negativo ou zero:: Escreva uma função chamada verificarNumero que recebe um número 
//como argumento e imprime no console se o número é positivo, negativo ou zero. Você deve usar return.
let verificarNumero = (num1) => {
    if(num1 > 0) {
        return'Este número é positivo'
    } else if(num1< 0){
        return 'Este número é negativo'
    } else if(num1 == 0){
        return "Este número é 0, ou seja, neutro"
    } else {
        return'Não encontrado'
    }
}
console.log(verificarNumero('-1'))