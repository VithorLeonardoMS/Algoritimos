const professor = {
    nome: 'Vithor',
    idade: '27',
    tarefas: ['Dar aula', 'Responder dúvidas'],
}
console.log(professor.nome)
console.log(professor['nome'])
professor.nome = 'outroNome'
console.log(professor.tarefas[0])