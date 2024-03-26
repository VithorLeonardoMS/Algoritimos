let indice = 2//de cima
let radicando = 4//de baixo
let dezena
let unidade
let maior
let menor
let variavel
let teste
let resultado
function potenciacaoEAnalize(resultadoP, teste){
    teste = teste -1
    while(teste >= 1){
        resultadoP = resultadoP * numero
        if(resultadop === radicando){
            teste = 0
        }else{
    teste = teste - 1}
    }
    return resultadoP
}
function primeiroteste(){

maior = 100
menor = 0
diferenca = 100
valordezena = 0
while (dezena >= 0) {
    if(radicando>=menor && radicando <= maior ){
        dezena = valordezena
    } else {
 menor =  maior
maior = maior + diferença
diferenca = diferenca + 200
 valordezena = valordezena + 10  
}}}

function segundotseste(){
   
switch (unidade){
case 1:
    if(potenciacaoEAnalize(valordezena+1, indice)){
        resultado = valordezena + 1
    } else{ 
        resultado = valordezena + 9
    }
    break
case 4:
if(potenciacaoEAnalize(valordezena+4, indice)){
    resultado = valordezena + 2
} else{ 
    resultado = valordezena + 8
}
break
case 5:
    resultado = valordezena + 5
    break
case 6:
    if(potenciacaoEAnalize(valordezena+6, indice)){
        resultado = valordezena + 4
    } else{ 
        resultado = valordezena + 6
    }
    break
case 9:
    if(potenciacaoEAnalize(valordezena+9, indice)){
        resultado = 1
    } else{ 
        resultado = valordezena + 9
    }
    break
case 0:
resultado = 10
}

// verificar effetividade do valor dado para resultado, dar uma olhada em "resultado = 0" também é interessante
}
