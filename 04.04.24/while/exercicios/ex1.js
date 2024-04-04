
const regreciva = (qnt) =>{
 while(qnt >= 0){
     console.log(`Contagem: ${qnt}`)
     qnt --
}}
const bomba = function(qnt){

while(qnt > 0){
    if(qnt % 2 === 0 && qnt !== 0){
        console.log('Tick')
    } else if(qnt !== 0){
        console.log('Tack')
    } else {
        console.log('Booooooooooooooooooooooooooooooooooooooooooooooooooooom')
    }
    qnt --
}}
bomba(999999999)