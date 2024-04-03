/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
    */    
    const readlineSync = require('readline-sync');
    
    const comidaDoUsuario = readlineSync.question('Qual sua comida favorita? ');

   let comidasFavoritas = ['Churrasco', 'Lasanha', 'Açai', 'Pastel','Batata frita']
   comidasFavoritas[1] = comidaDoUsuario
   console.log(comidasFavoritas)
   console.log('Essas são minhas comidas preferidas:' )
   let teste = 0
   while(teste <= comidasFavoritas.length - 1){
    console.log(comidasFavoritas[teste])
    teste += 1
   }
