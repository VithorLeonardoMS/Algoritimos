const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame um número a ser elevado: ", (numero) => {
    rl.question("Ele sera elevado a qual potência? ", (potencia) => {
        potencia = Number(potencia)
        let resultado = numero
        let teste = potencia - 1
       if(potencia !== 1 && potencia - potencia.toFixed(0) === 0){
        while(teste >= 1){
        resultado = resultado * numero
    teste = teste - 1}
    console.log(`O resultado é ${resultado}`)
        } else if(potencia === 1){
            console.log(`O resultado é ${resultado}`)
        } else {
            console.log('Algo foi digitado de forma inválida')
        }
    rl.close();
    })
})
