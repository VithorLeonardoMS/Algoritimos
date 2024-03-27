const readline = require("readline");

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digame o número, tal qual será descoberto a radiciação: ", (radicando) => {
    rl.question("Ele sera elevado a qual potência? ", (indice) => {
        
radicando = Number(radicando)
indice = Number(indice)
let dezena
let unidade
let resultRais

        if(!(radicando <= 0 || radicando >= 0)){
         console.log('O radicando não pode ser uma letra ou um caractere especial')
        } else {

        let resultado = radicando
        let teste = indice - 1

        if(indice === 0){
            console.log(`O resultado é 1`)
        } else if(indice === 1){
            console.log(`O resultado é ${resultado}`)
        } else if(indice - indice.toFixed(0) === 0){

                switch(radicando - ((radicando/10).toFixed(0))){

            case 4:
        
            while(resultRais)//analizando ainda
            resultRais = 8*8
           resultRais = 2*2

            
            break;
                }

        while(teste >= 1){
        resultado = resultado * radicando
    teste = teste - 1}
    console.log(`O resultado é ${resultado}`)

        } else {
            console.log('A potência não pode ser uma letra, um caractere especial, um número racional(não inteiro) ou um número negativo')
        }}

    rl.close();
    })
})