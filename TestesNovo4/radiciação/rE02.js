let indice = 2//de cima
let radicando = 20000//de baixo
let testeDezena = -1 
let unidade = 0//Descobrir como saber a unidade
let maior
let menor
let variavel
let teste
let resultado
let diferenca
let valorDezena

console.log(unidade)//teste
function poteciacao(base,potencia){
    teste = potencia - 1
    resultado = base 
    while(teste >= 1){
    resultado = resultado * base
    teste = teste - 1
    return resultado
}
}
function potenciacaoEAnalize(resultadoP, teste){
    teste = teste -1
    while(teste > 1){
        resultadoP = resultadoP * numero
        if(resultadoP === radicando){
            teste = 0
        }else{
    teste = teste - 1}
    }
    return resultadoP
}
function numerosPequenos(ValDez){
let numeroPequeno = 0.000001

    resultado = numeroPequeno + ValDez
    while(resultado ){
    resultado = resultado * base
    // Faltanteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
}
return numeroPequeno
}

maior = 100
menor = 0
diferenca = 300
valorDezena = 0
while (testeDezena < 0) {
    if(radicando>=menor && radicando <= maior ){
        testeDezena = valorDezena
    } else {
 menor =  maior
maior = maior + diferenca
diferenca = diferenca + 200
 valorDezena = valorDezena + 10  
}}
console.log(valorDezena)//teste

   
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
if(poteciacao(resultado, indice)=== radicando){

}else {
    numerosPequenos(valorDezena)
}


console.log(resultado)



