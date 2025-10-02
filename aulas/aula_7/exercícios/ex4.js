const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame a operação matemática a ser realizada: ", (operação) => {
    rl.question("Qual o primeiro número da operação? ", (numero1) => {
        rl.question("Qual o segundo número? ", (numero2) => {
numero1 = Number(numero1)
numero2 = Number(numero2)
if(operação === "+"){
    operação = numero1 + numero2
} else if(operação === "-"){
    operação = numero1 - numero2
} else if(operação === "*"){
    operação = numero1 * numero2
} else if(operação === "/"){
    operação = numero1 / numero2
} else {
    console.log('Operação não encontrada')
}
console.log(`O resultado é: ${operação}`)
// Fechando a interface de leitura
rl.close();
    })
})
})