//Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", mostre qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que valor da variavel. Exemplo Entradas: "fantasia" | "10" Saída: Qual snack que você quer comprar?​Entrada: "chocolate" Saída: "Bom filme!" "Aproveite o seu chocolate"
let filme = "Homem Libélula"
let valorFilme
let genero
switch(filme){
    case "Homem Libélula":
        valorFilme = 12
        genero = 'fantasia'
    break
    case "Divertidamente 2":
        valorFilme = 12.50
        genero = 'aventura'
    break
    case "Oppenheimer 2":
        valorFilme = 25
        genero = 'suspense'
    break
    case "Velózes e furiósos 25":
        valorFilme = 0.50
        genero = "ação"
    break;
}
let lanchinho = "chocolate"
if (valorFilme < 15 & genero === 'fantasia') {
    console.log("Bom filme! aproveite seu",lanchinho)
} else {
    console.log("Escolha outro filme")
}
