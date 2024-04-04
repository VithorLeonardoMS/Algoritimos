function multiplicacao(num1,num2){
    if((num1 % 2 === 0) || (num2 % 2 === 0)){
        return num1 * num2
    } else {
        return ''
    }
}
console.log(multiplicacao(2,3))