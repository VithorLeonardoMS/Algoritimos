let cadastro
let cadastroInfo
function cadastroDeUsuario(nome,idade){
    if(idade >= 18){
       cadastro = nome
       cadastroInfo = `Nome: ${nome}, idade: ${idade}`
       return 'Cadastro concluído'
    } else {
        return 'O usuário deve ser maior de idade para se cadastrar.'
    }
}

function verificaSeCadastrado(nome){
    if(cadastro === nome){
        return cadastroInfo
    } else{
        return 'o usuário não foi encontrado.'
    }
} 
function removerUsuario(nome){
    if(nome === cadastro){
        cadastro = undefined
        return 'Usuário removido com sucesso'
    } else {
        return 'usuário não encontrado'
    }
}

console.log('Criando cadastro de "Vithor": ',cadastroDeUsuario("Vithor",19))
console.log('Verificando cadastro de "Vithor": ',verificaSeCadastrado('Vithor'))
console.log('Removendo o usuário "Vithor": ',removerUsuario('Vithor'))
console.log('Cadastrando "PetrusDuGrau": ',cadastroDeUsuario('PetrusDuGrau', 15))
console.log('Verificando cadastro de "Vithor": ', verificaSeCadastrado('Vithor'))
console.log(`Verificando cadastro de "PetrusDuGrau": ${verificaSeCadastrado('PetrusDuGrau')}`)


