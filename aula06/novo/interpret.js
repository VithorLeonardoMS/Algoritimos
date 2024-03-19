/*Leia o código abaixo:

const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
     console.log("Passou no teste.") 
    } else {
         console.log("Não passou no teste.")
     }


a) Explique o que o código faz. Qual o teste que ele realiza? O código inicialmente pega a resposta do usuario e transforma no tipo number, depois disso ele verifica se esse número é par, Analizando se o resto da divisão deste número é par, se for, ele imprime: "Passou no teste.",se não, iprime:"Não passou no teste.".

b) Para que tipos de números ele imprime no console "Passou no teste"? Para os número pares - cujo a divisão não resulta em restos.

c) Para que tipos de números a mensagem é "Não passou no teste"? Para os números impares - cujo a divisão resulta em restos.
*/

/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

```jsx
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
a) Para que serve o código acima? O código acima imprime respectivamente o valor do tipo de fruta na variável.

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? 2.25

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? será impresso "5", já que o valor de "preço" é alterado duas vezes, fazendo com que a ultima alteração seja a prevalente.
*/

/* Leia o código abaixo:
const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a) O que a primeira linha está fazendo? Transformando a string '50' em number.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Se o usuário digitou 10, será impresso ""Esse número passou no teste" e "Essa mensagem é secreta!!!", se o usuário digitar -10 não será impresso nada.

c) Haverá algum erro no console?No caso do número ser menor que 0, ocorrerá um erro, pois a variável "mensagem" não tera valor, e mesmo assim o código tentará imprimila.
*/

