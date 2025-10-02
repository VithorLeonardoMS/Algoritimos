const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame um número a ser elevado: ", (numero) => {
    rl.question("Ele sera elevado a qual potência? ", (potencia) => {
        potencia = Number(potencia)
        if(!(numero <= 0 || numero >= 0)){
         console.log('A base não pode ser uma letra ou um caractere especial')
        } else{
        let resultado = numero
        let teste = potencia - 1
        if(potencia === 0){
            console.log(`O resultado é 1`)
        } else if(potencia === 1){
            console.log(`O resultado é ${resultado}`)
        } else if(potencia - potencia.toFixed(0) === 0){
        while(teste >= 1){
        resultado = resultado * numero
    teste = teste - 1}
    console.log(`O resultado é ${resultado}`)
        } else {
            console.log('A potência não pode ser uma letra, um caractere especial, um número racional(não inteiro) ou um número negativo')
        }}
    rl.close();
    })
})
