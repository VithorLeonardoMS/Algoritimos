function mediaDasNotas(nota1,nota2,nota3){
    const media = (nota1 + nota2 + nota3)/3
    console.log("A média das suas notas é", media.toFixed(2))
 }


    const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame as notas e te direi a média, digite a primeira: ", (a) => {
    rl.question("Digite a segunda: ", (b) => {
        rl.question("Digite a terceira: ", (c) => {
        

            mediaDasNotas(Number(a),Number(b),Number(c))
rl.close();
})})})