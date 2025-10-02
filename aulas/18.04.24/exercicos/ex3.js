const filme ={
    nome: 'Shrek',
    diretor: 'Zé',
    dataDeLancamento: '1 de janeiro de 2024'

}


filme.elenco = [
    {ator:'Pedro',personagem:'Shrek'},
    {ator:'Ana',personagem:'Fiona'},
    {ator:'Sérgio ramos',personagem:'Pinóquio'}
]
filme.elenco[0].ator = 'Xuxa'

for(i=0;i<filme.elenco.length;i++){
    console.log('Ator',filme.elenco[i].ator,'que interpreta',filme.elenco[i].personagem)
}
