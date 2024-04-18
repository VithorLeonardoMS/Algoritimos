const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//Virginia Cavendish
console.log(filme.transmissoesHoje[2])//canal: "Canal Brasil", horario: "19h"

//2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
​
/*
a) O que vai ser impresso no console?
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"
     nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Copia algo para dentro de um objeto.
*/

//3
    
   
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
   
    /*a) O que vai ser impresso no console?
    false
    undefined
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    A função coloca o primeiro argumento com o segundo em conchetes, o que faz a busca da propriedade dentro do objeto. A primeira chave é encontrada e impressa, mas a segunda não, e por isso imprime undefined.
    */