const readlineSync = require('readline-sync');
console.log('Me diga as informações e eu lhe darei a resposta de uma raiz se for inteira')
let indice = readlineSync.question('Qual o indice? ');//de cima
indice = Number(indice)
let radicando = readlineSync.question('Qual o radicando? ');//de baixo
radicando = Number(radicando)
const radicandoString = String(radicando)
const arrayRadicando = radicandoString.split('')
let unidadeString = arrayRadicando[arrayRadicando.length-1]
let unidade = (Number(unidadeString))
let maior
let menor
let variavel
let teste
let resultado = 0
let diferenca
let valorDezena


function potenciacaoEAnalize(resultadoP, teste){
    teste = teste -1
    while(teste >= 1){
          resultadoP = resultadoP * resultadoP
            if(resultadoP === radicando){
                 teste = 0
             }else if(resultadoP>radicando){
                return false
             }else {
                 teste = teste - 1}
            }


    console.log('potenciaçãoEAnalize resultou em:',resultadoP)

    if(resultadoP === radicando){
        return true
    }else{
        return false
    }

}
function potenciacao(base, potencia){
        let resultadoFuncao = base
        let teste = potencia - 1
        if(potencia - potencia.toFixed(0) === 0){
            while(teste >= 1){
                resultadoFuncao = resultadoFuncao * base
                teste = teste - 1
            }
       
        }
        return resultadoFuncao
     }

function processandoNumerosMenores(caso){
let resultadoProcessando
    caso =+ -1
let potenciando = valorDezena+caso
    for(i=1.000;i>0;i-=0.001){
      if(potenciacao(potenciando+i, indice) === radicando){
        resultadoProcessando = potenciando+i 
        return resultadoProcessando
      }
    }
    for(i=1.000000;i>0;i-=0.000001){
        if(potenciacao(potenciando+i, indice) === radicando){
          resultadoProcessando = potenciando+i 
          return resultadoProcessando
        }
      }
    return false

    


}

function primeiroTeste(){
    let testeDezena = -1
maior = 100
menor = 0
diferenca = 300
valorDezena = 0
while(testeDezena < 0) {
    if(radicando>=menor && radicando <= maior ){//Se o radicando estiver entre menor e maior
        testeDezena = 0
    } else {
 menor =  maior
maior = maior + diferenca
diferenca = diferenca + 200
 valorDezena = valorDezena + 10  
}}
console.log(`ValorDezena é: ${valorDezena}`)
}
let testeNoCaso
function segundoTeste(){
   
switch (unidade){
case 1:
    if(potenciacaoEAnalize(valorDezena+1, indice)){
        resultado = valorDezena + 1
    } else if(potenciacaoEAnalize(valorDezena+9, indice)){ 
        resultado = valorDezena + 9
    } else{
       testeNoCaso = processandoNumerosMenores(1)
       if(!testeNoCaso){
        testeNoCaso = processandoNumerosMenores(9)
       }else{
        resultado = 'Número muito fracionado, resultou em um número com muitas casas depois do zero'
       }
    }
    break
case 4:
if(potenciacaoEAnalize(valorDezena+4, indice)){
    resultado = valorDezena + 2
} else if(potenciacaoEAnalize(valorDezena+8, indice)){ 
    resultado = valorDezena + 8
}
break
case 5:
    if(potenciacaoEAnalize(valorDezena+5, indice)){
        resultado = valorDezena + 5
    }
    break
case 6:
    if(potenciacaoEAnalize(valorDezena+4, indice)){
        resultado = valorDezena + 4
    } else if(potenciacaoEAnalize(valorDezena+6, indice)){ 
        resultado = valorDezena + 6
    }
    break
case 9:
    if(potenciacaoEAnalize(valorDezena+3, indice)){
        resultado = valorDezena +3
    } else if(potenciacaoEAnalize(valorDezena+7, indice)){ 
        resultado = valorDezena +7
    }
    break
    case 0:
        if(potenciacaoEAnalize(valorDezena+10, indice)){
            resultado = valorDezena + 10
        }
        break;
}


console.log('resultado teste:' ,resultado)
// verificar effetividade do valor dado para resultado, dar uma olhada em "resultado = 0" também é interessante
}
console.log('Executando primeiroTeste')
primeiroTeste()
console.log('Executando segundoTeste')
segundoTeste()

console.log('Resultado:',resultado)
