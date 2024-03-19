//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme"
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
if (valorFilme < 15 & genero === 'fantasia') {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
}