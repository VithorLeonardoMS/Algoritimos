const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Diga a frase: ", (frase) => {

console.log(frase.toUpperCase().replaceAll('O','I'), frase.length)

rl.close();

});