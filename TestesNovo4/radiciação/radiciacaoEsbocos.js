let indice = 2//de cima
let radicando = 25//de baixo
const radicandoString = String(radicando)
const arrayRadicando = radicandoString.split('')
let unidadeString = arrayRadicando[arrayRadicando.length-1]
let unidade = (Number(unidadeString))
console.log(unidade)
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
        resultadoP = resultadoP * numero
        if(resultadoP === radicando){
            teste = 0
        }else{
    teste = teste - 1}
    }
    return resultadoP
}
function primeiroTeste(){
    let testeDezena = -1
maior = 100
menor = 0
diferenca = 300
valorDezena = 0
while(!(testeDezena >= 0)) {
    if(radicando>=menor && radicando <= maior ){
        testeDezena = valorDezena
    } else {
 menor =  maior
maior = maior + diferenca
diferenca = diferenca + 200
 valorDezena = valorDezena + 10  
}}
console.log(`ValorDezena = ${valorDezena}`)
}

function segundoTeste(){
   
switch (unidade){
case 1:
    if(potenciacaoEAnalize(valorDezena+1, indice)){
        resultado = valorDezena + 1
    } else{ 
        resultado = valorDezena + 9
    }
    break
case 4:
if(potenciacaoEAnalize(valorDezena+4, indice)){
    resultado = valorDezena + 2
} else{ 
    resultado = valorDezena + 8
}
break
case 5:
    resultado = valorDezena + 5
    break
case 6:
    if(potenciacaoEAnalize(valorDezena+4, indice)){
        resultado = valorDezena + 4
    } else{ 
        resultado = valorDezena + 6
    }
    break
case 9:
    if(potenciacaoEAnalize(valorDezena+1, indice)){
        resultado = 1
    } else{ 
        resultado = valorDezena + 9
    }
    break
    case 0:
        resultado = valorDezena + 10
        break;
}

console.log(resultado)
// verificar effetividade do valor dado para resultado, dar uma olhada em "resultado = 0" também é interessante
}
console.log('Executando primeiroTeste')
primeiroTeste()
console.log('Executando segundoTeste')
segundoTeste()

console.log('Resultado:',resultado)
