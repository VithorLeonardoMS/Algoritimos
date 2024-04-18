function copiaAdicionaObjetos(objeto){

    let novo = {
        ...objeto,
        comidasPreferidas:['arroz','feijão','batata frita','lasanha'],
        melhorAmigo:{
            nome:'João',
            idade:25
        }
    }
   console.log(`O nome da pessoa é ${novo.nome} e suas comidas favoritas são ${novo.comidasPreferidas[0]}, ${novo.comidasPreferidas[1]} e ${novo.comidasPreferidas[3]} e seu melhor amigo se chama ${novo.melhorAmigo.nome} e tem ${novo.melhorAmigo.idade}, anos`)
   
}

const pessoa = {
    nome:'Vithor',
    idade:17,
    generoMusical:'Funk'

}
copiaAdicionaObjetos(pessoa)