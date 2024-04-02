let personagens = ['Chaves','Chiquinha','Kiko']
function aleartorizar(){

   
   let numero = Math.floor(Math.random() * personagens.length)
    return console.log(`Você é: ${personagens[numero]}`) 
    
    
   
}
aleartorizar()