const somaDeArray = (array) => {
    let soma = 0
    for(i=array.length-1;i>-1;i--){
      soma += Number(array[i])
    }
    return (String(soma)).split('')
  }
  
  const verificaMult = (num) => {
    let inicial = num
    num = String(num).split('') 
    let i=1
    num =somaDeArray(num)
    
    while(i===1){
      
      if( num.length > 1){// Se o número tiver mais que um carácter 
      num = somaDeArray(num)// Para ter apenas um carácter(repéte até que tenha apenas um)
      } else if(num[0] === '9' || num[0] === '6' || num[0] === '3'){// Quando a soma dos algarismos de um número resulta em um multiplo de 3, ele é multiplo de 3
        i = 0
        num = inicial
        return true// É multiplo de 3
      } else{
        i = 0
        num = inicial
        return false// Não é multiplo de 3
      }
    
    }
    
  }

  const AllMenosMult3 = (menor, maior) => {
  
    for(teste=menor;teste<=maior;teste++){
      if(!(verificaMult(teste)) ){
        console.log(teste)
      }
    }
  }
  AllMenosMult3(1,9999999)