const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// se a entrada do usuário for: "Subi num ônibus em Marrocos", sera impresso: subi num ônubus em rocmiros 27