const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame o primeiro número: ", (numero1) => {
    rl.question("Digame o segundo número: ", (numero2) => {
        rl.question("Digame o terceiro número: ", (numero3) => {
let maiorNumero = Number(numero1)
if(maiorNumero < Number(numero2)){
    maiorNumero = Number(numero2)
} 
 if(maiorNumero < Number(numero3)){
    maiorNumero = numero3
}
console.log(`O maior número é o número ${maiorNumero}`)
// Fechando a interface de leitura
rl.close();
        })
    })
})
