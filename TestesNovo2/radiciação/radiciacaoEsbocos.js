let indice = 2//de cima
let radicando = 25//de baixo
let testeDezena 
let unidade
let maior
let menor
let variavel
let teste
let resultado
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

maior = 100
menor = 0
diferenca = 300
valorDezena = 0
while (testeDezena >= 0) {
    if(radicando>=menor && radicando <= maior ){
        testeDezena = valorDezena
    } else {
 menor =  maior
maior = maior + diferenca
diferenca = diferenca + 200
 valorDezena = valorDezena + 10  
}}}

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
}


// verificar effetividade do valor dado para resultado, dar uma olhada em "resultado = 0" também é interessante
}
primeiroTeste()
segundoTeste()
console.log(resultado)
