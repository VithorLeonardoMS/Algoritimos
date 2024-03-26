/*1. Escreva as funções explicadas abaixo:
    
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/
const imprimir = () => {
    console.log("Eu sou Vithor, tenho 17 anos, moro em Rio Grande do Sul e sou estudante.")
}
imprimir()
/*
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/
const imprimirComParâmetros = function(nome,idade,endereco,profissao){
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
imprimirComParâmetros("Vithor",17,"Rio Grande do Sul",'estudante' )