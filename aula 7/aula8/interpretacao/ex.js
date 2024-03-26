1. /* 1- Leia o código abaixo
    
    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```
    
    a) O que vai ser impresso no console?Sera impresso 10 e 50, pois os valores são multiplicados por 5.
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? Se fizessemos isso, não seria impresso nada, pois não á nenhum comando que crie uma impressão, nem fora, nem dentro da funcion.
    */
    
/* 2-2. Leia o código abaixo
    
    ```jsx
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```
    
    a. Explique o que essa função faz e qual é sua utilidade
    Essa função determina se um texto contém a palavra "cenora", mesmo se for uma paravra com letras maíusculas ele irá transformalas em minusculas antes de compararar com a palavra "cenoura", então, se sim, ira primer true, se não imprime false.
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` True
         ii.  `CENOURA é bom pra vista` True
         iii. `Cenouras crescem na terra`False




*/