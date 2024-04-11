const somaDeArray = (array) => {
  let soma = 0
  for(i=array.length-1;i>-1;i--){
    soma += Number(array[i])
  }
  return (String(soma)).split('')
}
  
let somaDeCaracteres

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

/*Ola professor Leonardo, Eu sei que tem um geito bem mais facil de fazer,
mas queria fazer esse teste, então fiz este código usando uma logica 
que minha professora ensinou, que é: se somarmos os algarismos de
um número e o resultado for um multiplo de 3, então ele é multiplo de 3,
Ex: 333 = 9 => multiplo de três, 5742 = 18 => multiplo de 3.
Usei essa lógica porque assim posso criar um função que remove os 
números múltiplos de 3 automáticamente, independente da sequência,
quando fasso o teste para a função que verificar se é multiplo(verificaMult) 
tudo ocorre perfeitamente, indentificando quando é multiplo de três, porém 
quanto coloco no for(da função AllMenosMult3), os aplicativos de celular que eu uso pra programar
simplesmente travam, não sei se é culpa dos aplicativos ou do código,
se no computador funcionar tudo bem, mas se não, eu não sei o que está de errado 
nele.
*/
let a = 5742
console.log(verificaMult(a))//verificação de multiplos funcionando 
console.log(a)/*Não ocorre nenhuma alteração na variável que possa causar
algum problema*/
console.log(typeof(a))//nem no tipo

const AllMenosMult3 = (menor, maior) => {

  for(teste=menor;teste<=maior;teste++){
    if(!(verificaMult(teste)) ){
      console.log(teste)
    }
  }
}
AllMenosMult3(1,9999999)