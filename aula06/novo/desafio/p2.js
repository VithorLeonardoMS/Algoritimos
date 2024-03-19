/*Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,você vai fornecer algumas informações:

Nome completo;
Tipo de jogo: IN indica internacional; e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos
O sistema deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Junto nesta pasta há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)*/
let nomeCompleto = "Vithor Leonardo Mello Soares"
let tipoJogo = "DO"
let etapaJogo = "FI"
let categoria = 1
let quantidade = 10
let ingressoV 
switch(categoria){
case 1:
switch(etapaJogo){
    case 'SF':
        ingressoV = 1320
    break
    case 'DT':
        ingressoV = 660
    break
    case 'FI':
        ingressoV = 1980
    break
}
break
case 2: 
switch(etapaJogo){
    case 'SF':
        ingressoV = 880
    break
    case 'DT':
        ingressoV = 440
    break
    case 'FI':
        ingressoV = 1320
    break;
}
break
case 3:
    switch(etapaJogo){
        case 'SF':
            ingressoV = 550
        break
        case 'DT':
            ingressoV = 330
        break
        case 'FI':
            ingressoV = 880
        break;
    }
case 4:
    switch(etapaJogo){
        case 'SF':
            ingressoV = 220
        break
        case 'DT':
            ingressoV = 170
        break
        case 'FI':
            ingressoV = 330
        break;
    }
break
}
let totalValor = ingressoV * quantidade
let etapaFinal
let tipoFinal 
if(etapaJogo === "SF"){
    etapaFinal = "semi final"
} else if(etapaJogo === "DT"){
    etapaFinal = "Decisão do 3° lugar"
} else if(etapaJogo === "FI"){
    etapaFinal = "Final"
}

if(tipoJogo === "DO"){
    tipoFinal = "Doméstico"
} else if(tipoJogo === "IN"){
    tipoFinal = "Internácional"
} 
console.log( 'Nome do cliente:', nomeCompleto, 'Tipo do jogo:', tipoFinal , 'Etapa do jogo:', etapaFinal, 'Categoria:',categoria , 'Quantidade de Ingressos:', quantidade, 'Valor do ingresso:', ingressoV, 'Valor total:' ,totalValor)