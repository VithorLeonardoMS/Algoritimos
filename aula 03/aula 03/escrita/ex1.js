let nome
let idade
console.log(typeof nome, typeof idade)// Acredito que o codigo iprimiu "undifined undefined" justamente porque esse é o tipo de váriavel sem valor.
idade = 17
nome = 'Vithor'
console.log(typeof nome, typeof idade)// Agora que dei valores para as váriaveis os typos delas são "string" e "number", que são os tipos que representam respectivamente coisas escritas e números.
console.log('Olá', nome, 'você tem',
    idade, 'anos.')