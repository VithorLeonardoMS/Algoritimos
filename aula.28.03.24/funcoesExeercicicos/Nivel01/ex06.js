//6. **Encontrar o maior número:** Escreva uma função que receba 5 números como argumento e retorne qual o maior deles. Você deve usar `return`.
function maior(a,b,c,d,e){
    let maiorNumero = a
    if(maiorNumero < b){
        return maiorNumero = b
    } 
     if(maiorNumero < c){
        return maiorNumero = c
     }
     if(maiorNumero < d){
        return maiorNumero = d
     }
     if(maiorNumero < e){
       return  maiorNumero = e
     }
  
}
console.log(maior(5,2,3,4,1))