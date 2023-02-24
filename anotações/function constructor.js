/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return 'andando'
    }
}

const naldo = new Person('Naldo')
const joao = new Person('Joao')
console.log(naldo.walk())
console.log(joao.walk())

//outros
let name = new String('Naldo')
console.log(name)

let date = new Date('2023-02-23')
console.log(date)