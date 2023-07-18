// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
let queijo = true
let pao = true

const nicecafé = queijo || pao ? 'café bom' : 'café ruim'
console.log(nicecafé)


// Maior de 18
let idade = 19

const maior = idade >= 18 ? 'sim' : 'não'

console.log(maior)