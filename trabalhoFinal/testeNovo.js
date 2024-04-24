//Array dos moradores
const rd = require('readline-sync')
let bancoDeDados = [
    {
        nome:'Chaves',
        idade:'8',
        altura: '1.71m',
        corFav: 'Sanduiche de presunto',
        peso: '48kg',
        sexo: 'masculino'
},   {
    nome:'Quico',
    idade:'9',
    altura: '1.79m',
    corFav: 'vermelho',
    peso: '80kg',
    sexo: 'masculino'
},   {
    nome:'Chiquinha',
    idade:'8',
    altura: '1.53m',
    corFav: 'verde',
    peso: '48kg',
    sexo: 'feminino'
},   {
    nome:'Seu Madruga',
    idade:'50 e todos',
    altura: '1.78',
    corFav: 'verde',
    peso: '39.99kg',
    sexo: 'masculino'
},    {
    nome:'Dona Florinda',
    idade:'40',
    altura: '1.60',
    corFav: 'rosa',
    peso: '60.30kg',
    sexo: 'feminino'
},   {
    nome:'Professor Linguiça',
    idade:'36',
    altura: '3m',
    corFav: 'cinza',
    peso: '90.99kg',
    sexo: 'masculino'
},   {
    nome:'Bruxa do 71',
    idade:'44',
    altura: '1.70m',
    corFav: 'Azul',
    peso: '61kg',
    sexo: 'feminino'
},   {
    nome:'Seu Barriga',
    idade:'40',
    altura: '1.73m',
    corFav: 'preto',
    peso: '273.93kg',
    sexo: 'masculino'
},   {
    nome:'Seu Fumado',
    idade:'40',
    altura: '1.78',
    corFav: 'azul',
    peso: '49kg',
    sexo: 'masculino'
},    {
    nome:'Nhonho',
    idade:'9',
    altura: '1.73m',
    corFav: 'vermelho',
    peso: '273.93kg',
    sexo: 'masculino'
}, {
    nome:'Jaiminho',
    idade:'67',
    altura: '1.75',
    corFav: 'azul',
    peso: '85kg',
    sexo: 'masculino'
}, {
    nome:'Popis',
    idade:'9',
    altura: '1.60',
    corFav: 'rosa',
    peso: '60.30kg',
    sexo: 'masculino'
},{
    nome:'Paty',
    idade:'8',
    altura: '1.60',
    corFav: 'rosa',
    peso: '59kg',
    sexo: 'feminino'
},{
    nome:'Godines',
    idade:'44',
    altura: '1.70',
    corFav: 'amarelo',
    peso: '66kg',
    sexo: 'masculino'
},{
    nome:'Dona Neves',
    idade:'72',
    altura: '1.53',
    corFav: 'verde',
    peso: '48kg',
    sexo: 'feminino'
}

]
let listaDeObjetos = ['Sanduiche de presunto'] // Guardará os objetos roubados
let addObj
function addObjetos()
{
    addObj = rd.question("Adicione um objeto: ")
    listaDeObjetos.push(addObj) //Adiciona um objeto roubado no final da array "addObj"
}

let ladraoVila
let aleatorio
let ladraoCarac
function ladraoRandom()
{

    aleatorio = Math.floor(Math.random() * (bancoDeDados.length)) //Escolha aleatória do ladrão

    ladraoVila = bancoDeDados[aleatorio]
    while(ladraoVila > bancoDeDados.length - 1){
    ladraoVila = ladraoVila - 1
}
 
 ladraoCarac = {
  idade: ladraoVila.idade,
  peso: ladraoVila.peso,
  altura: ladraoVila.altura,
  corFav: ladraoVila.corFav
}

 
}


function adcionarPersonagem(){
    
   
    moradorNome = rd.question("Qual o nome do morador? ")
    moradorNome.toLowerCase()  
   

let moradorIdade = rd.question("Qual a idade do morador? ")
moradorIdade.toLowerCase()  


let moradorAltura = rd.question("Qual a altura do morador? ")
moradorAltura.toLowerCase()  
 

let moradorCorFav = rd.question("Qual a cor favorita do morador? ")
moradorCorFav.toLowerCase()  
 

    let moradorPeso = rd.question("Qual o peso do morador? ")
moradorPeso.toLowerCase()  
let moradorSexo = rd.question("Qual o sexo do morador? ")
moradorSexo.toLowerCase()  
bancoDeDados.push({
    nome: moradorNome,
    idade: moradorIdade,
    corFav: moradorCorFav,
    altura: moradorAltura,
    peso: moradorPeso,
    sexo: moradorSexo
})
}



//Menu
function exibirMenu(){
    console.log(" BEM VINDO AO MENU! Escolha: \n Precione 1 para investigar o ladrão. \n Precione 2 para cadastrar um novo morador.  \n precione 3 para ver todos os moradores da vila.  \n Precione 4 para adicionar objeto roubado. \n precione 5 para visualizar a lista de objetos roubados. \n precione 6 para tentar adivinhar o ladrão \n precione 7 para gerar novo ladrâo. \n precione 8 para sair")
}
function ProcessarEscolha(opcao)
{
switch (opcao){
    case "1":
        if(bancoDeDados.length == 0){
          console.log("Não há nenhum suspeito.")
        }else if(ladraoVila != undefined){
        console.log("O ladrão corresponde as seguintes características: ", ladraoCarac, " e roubou: ", listaDeObjetos)
        } else {
            console.log("Não exite nenhum ladrão, se quiser gerar um novo ladrão, precione 7")
        }
        break;
    case "2":
        adcionarPersonagem()
        break;
    case "3":
        console.log(bancoDeDados)
        break;
    case "4":
        addObjetos()
        break;
    case "5":
        console.log(listaDeObjetos)
        break;
    case "6":
        let palpite = rd.question("quem é o ladrao? ")
        palpite = palpite.toLowerCase()
        if(ladraoVila === undefined){
          console.log("Não exite nenhum ladrão, se quiser gerar um novo ladrão, precione 7")
        } else if(palpite ===ladraoVila.nome.toLowerCase()){

            console.log("Você acertou! o ladrão da vila é", ladraoVila.nome)
           return true
          } else {
          console.log("Você errou!")
        }
    break;
    case "7":
        ladraoRandom()
        console.log("O ladrão corresponde as seguintes características: ", ladraoCarac, " e roubou: ", listaDeObjetos)
        break
    case "8":
        console.log("Encerrando...")
        return true
        break;
    
 default:
        console.log("Não reconhecido, tente novamente.")
        return false
        
}
}

function main()
{
    let encerrar = false
    while(!encerrar){
    exibirMenu()
    let opcao = rd.question (" Digite o numero da opcao desejada: ")
    encerrar = ProcessarEscolha(opcao)
    }
}

main()