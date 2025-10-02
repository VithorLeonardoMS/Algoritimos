//par arrow
//media exeprecao
const calculaArea = (valor) => {
if(valor % 2 === 0 && valor !== 0){
    console.log("O número é par")
} else if(valor % 2 !== 0 && valor !== 0) {
    console.log("O número é impar")
} else if(valor === 0){
    console.log("O número é 0, ou seja, é neutro")
} else{
    console.log("A resposta foi inválida")
}
}
calculaArea(2)