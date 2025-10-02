const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame a senha: ", (senha) => {

if(senha == 1234) {
    console.log('Login bem-sucedido');
} else {
    console.log('Senha incorreta')
}
// Fechando a interface de leitura
rl.close();
})