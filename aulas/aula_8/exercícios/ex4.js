
function numeroImparOuPar(valor){
    if(valor % 2 === 0 && valor !== 0){
        console.log("O número é par")
    } else if(valor % 1 === 0) {
        console.log("O número é impar")
    } else if(valor === 0){
        console.log("O número é 0, ou seja, é neutro")
    } else{
        console.log("A resposta foi inválida")
    }
}

const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Diga um número e direi se ele é par ou impar: ", (valor) => {
    numeroImparOuPar(valor)
rl.close();
})