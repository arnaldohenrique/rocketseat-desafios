/* 
    A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

    Alguns exemplos de seu uso é: 
*/

let name1 = new String('Naldo')
let age = new Number(22)
console.log(name1, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)