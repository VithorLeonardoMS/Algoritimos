const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Qual a sua idade? ", (idade) => {

if(idade > 17) {
    console.log('você é maior de idadade');
} else{
    console.log('Você é de menor')
}
// Fechando a interface de leitura
rl.close();
})