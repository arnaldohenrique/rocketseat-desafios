/* 
    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

    Exemplos de uso: */

/* delete */
const person = {
    name: 'Naldo',
    age: 22,
}
delete person.age

console.log(person)

//Nesse caso estamos deletando a propriedade age do objeto person.

console.log(tyepof.person)

//Aqui vemos qual o tipo de dado que temos, nesse caso uma string.