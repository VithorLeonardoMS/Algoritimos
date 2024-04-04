function retirar(array){
    array.pop()
    array.splice(0,1)
    return array
}
const array = [1,2,3,4,5]
console.log(retirar(array))