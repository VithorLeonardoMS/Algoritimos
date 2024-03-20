//Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.
const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame o número: ", (numero) => {

if(numero > 0) {
    console.log('Este número é positivo');
} else if(numero < 0){
    console.log('Este número é negativo')
} else if(numero == 0){
    console.log("Este número é 0, ou seja, neutro")
} else {
    console.log('Não encontrado')
}
// Fechando a interface de leitura
rl.close();
})