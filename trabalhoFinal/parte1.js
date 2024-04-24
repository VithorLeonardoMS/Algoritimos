
const rd = require('readline-sync')

let bancoDeDados = [
    
    {
        nome: "Chaves"
    },
  
    {
        nome: "Chiquinha"
    },
  
    {
        nome: "Kiko"
    },
  
    {
        nome: "Seu Madruga"
    },
    {
        nome: "Dona Florinda"
    },

    {
        nome: "Dona Clotilde",
        
    }
]










function adcionarPersonagem(){

    console.log('Digite "C" para cancelar')
    
   
    moradorNome = rd.question("Qual o nome do morador? ")
    moradorNome.toLowerCase()
    if(moradorNome === 'c'){
       
    }else{
        
        bancoDeDados.push({nome:moradorNome})
    }

}




console.log(bancoDeDados)
function ladrao(){
let aleatorio = Math.floor(Math.random()) * 100

let ladrao = bancoDeDados[bancoDeDados.aleatorio]

console.log(aleatorio)}

//CRIAR UM MENU COM A OPÇÃO DE:
//ADICIONAR MORADOR;
//INVESTIGAR LADRÃO;
//VISUALIZAR TODOS OS MORADORES;
//ADICIONAR OBJETOS ROUBADOS;
//VISUALIZAR OBJETOS ROUBADOS;


//Função para exibir o menu de opções
function exibirMenu () {
    console.log("Menu de Opções:");
    console.log("1. Adcionar personagem");
    console.log("2. Opção 2");
    console.log("3. Opção 3")
    console.log("4. Sair");
}

const readline = require('readline-sync');

//Função para processar a escolha do usuário
function processarEscolha (opcao) {
    switch (opcao) {
        case '1':
            adcionarPersonagem()
        case '2':
            console.log("Você escolheu a opção 2");
        case '3':
            console.log("Você escolheu a opção 3");
        break;
        case '4':
            console.log("Encerrando o programa...");
            return true; //Indica que o programa deve ser encerrado
    default:
        console.log("Opção invalida. Por favor, escolha uma opção valida.");
        }
        return false; // Indica que o programa não deve ser encerrado
}

//Função principal
function main() {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opcao = readline.question ("Digite o numero da opcao desejada: ");
        encerrar = processarEscolha(opcao);
    }
}

//Iniciar programa
main();



//testeso
console.log(bancoDeDados)