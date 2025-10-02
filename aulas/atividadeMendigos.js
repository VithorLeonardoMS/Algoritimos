const rd = require('readline-sync')

let bancoDeDados = [{
  codigo:"001",
  nome:"Ginásio",
  endereco:"rua tal, bairro tal",
  cidade:"Sao Leopoldo",
  telefone:"4002-8922",
  capacidade:"650",
  vagas:80
  },
  {
  codigo:"123",
  nome:"Terra",
  endereco:"vila Lactea",
  cidade:"Universo",
  telefone:"777",
  capacidade:"10 bihões",
  vagas:2000000000
  },
  {
  codigo:"002",
  nome:"SOS do Justo",
  endereco:"Invasão do Justo",
  cidade:"Sao Leopoldo",
  telefone:"9999 8181",
  capacidade:"100",
  vagas:25
  }
]

function adicionarNovoAbrigo(nome,endereco,cidade,telefone,capacidade,vagas){
  bancoDeDados.push({
  codigo:"00" + bancoDeDados.length,
  nome:nome,
  endereco:endereco,
  cidade:cidade,
  telefone:telefone,
  capacidade:capacidade,
  vagas:Number(vagas)
  })
}
adicionarNovoAbrigo("Teste","Rua Arroz, bairro Banana","Sul do Norte","1234","120","0")

function listarUma(indice){
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log(" Código:",bancoDeDados[indice].codigo)
    console.log(" Nome:",bancoDeDados[indice].nome)
    console.log(" Endereço:", bancoDeDados[indice].endereco)
    console.log(" Cidade:",bancoDeDados[indice].cidade)
    console.log(" Telefone:",bancoDeDados[indice].telefone)
    console.log(" Capacidade:",bancoDeDados[indice].capacidade)
    console.log(" Vagas:",bancoDeDados[indice].vagas)
  
}
function listarTodas(){
  for(i=0;i!==bancoDeDados.length;i++){
    listarUma(i)
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

// listarTodas()

function abrigosDisponiveis(cidade){
  console.log("Os locais disponíveis em",cidade, "são:")
  cidade = cidade.toLowerCase()
  for(i=0;i!==bancoDeDados.length;i++){
    if(bancoDeDados[i].vagas > 0 && bancoDeDados[i].cidade.toLowerCase() == cidade){
      listarUma(i)
    }
  }
}
// abrigosDisponiveis("Sao Leopoldo")



function exibirMenu(){
    // console.log("BEM VINDO AO MENU! \n Escolha: \n Precione 1 para adicionar um novo abrigo. \n  Precione 2 para listar todos os abrigos.  \n precione 3 para procurar um abrigo.  \n Precione 4 para sair.")
    console.log(`.______________________________.`)
    console.log(`|      BEM VINDO AO MENU!      |`);
    console.log(`|------------------------------|`);
    console.log(`| 1. Adicionar um novo abrigo  |`);
    console.log(`| 2. Listar todos os abrigos   |`);
    console.log(`| 3. Procurar um abrigo        |`);
    console.log(`| 4. Sair                      |`);
    console.log(`|______________________________|`); 
}

function processarEscolha(opcao)
{
switch (opcao){
    case "1":
    
    let nomeP = rd.question('Qual o nome do abrigo? ')
    let enderecoP = rd.question('Qual o endereço do abrigo? ')
    let cidadeP = rd.question('Qual a cidade do abrigo? ')
    let telefoneP = rd.question('Qual o telefone do abrigo? ')
    let capacidadeP = rd.question('Qual a capacidade do abrigo? ')
    let vagasP = rd.question ('O abrigo tem quantas vagas sobrando? ')
        adicionarNovoAbrigo(nomeP,enderecoP,cidadeP,telefoneP,capacidadeP,vagasP)
        break;
    
    case "2":
         listarTodas()
        break;
    
    case "3":
        let cidadeQuestion = rd.question("Qual a sua cidade? ")
        abrigosDisponiveis(cidadeQuestion)
        break
    case "4":
        console.log("Encerrando...")
        return true
        
    
    }
}
 function main()
{
    let encerrar = false
    while(!encerrar)
    {exibirMenu()
     let opcao = rd.question ('Digite o numero da opcao desejada: ')
      encerrar = processarEscolha(opcao)
    }
}
main()