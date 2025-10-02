/* 
3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
    */
   
   let listaDeTarefas = []

   const readlineSync = require('readline-sync');

const tarefa1 = listaDeTarefas.push(readlineSync.question('Digame tres tarefas, qual a primeira? '))
const tarefa2 = listaDeTarefas.push(readlineSync.question('Qual a segunda tarefa? '))
const tarefa3 = listaDeTarefas.push(readlineSync.question('Qual a terceira tarefa? ? '))

const indice = readlineSync.question('Diga a tarefa que voce ja realizou? ')

listaDeTarefas.splice(indice,1)//Retira

console.log(listaDeTarefas)