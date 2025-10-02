
const pessoa = {
    nome:'Vithor',
    apelidos: ['Vi Thor', 'vitinho', 'lindo']
}
function frase(objeto){
    let array = objeto.apelidos
let apelidosJuntos = array[0]

for(i=1;i<objeto.apelidos.length-1;i++){
    apelidosJuntos += ', ' + array[i]
}
apelidosJuntos += ' ou '+ array[array.length-1]
console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${apelidosJuntos}`)
}

frase(pessoa)

const novoObjeto = {
    ...pessoa,
    apelidos:['maravilhoso','indescritivel','fisiculturista','Lider']
}

frase(novoObjeto)