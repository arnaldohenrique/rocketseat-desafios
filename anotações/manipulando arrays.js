//Manipulando Arrays

let techs = ['html','css','js']

//adicionar um item no fim
console.log(techs.push('nodejs'))

//adicionar no começo
console.log(techs.unshift('sql'))

//remover do fim
console.log(techs.pop())

//remover do começo
console.log(techs.shift)

//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posição do array
console.log(techs.splice(1, 1))

//encontrar a posição de um elemento no array
let index = techs.indexOf('js')
techs.splice(index, 1)

console.log(techs)
