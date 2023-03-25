//Manipulando Strings e Números

//Transformar um número quebrado com 2 casas dedcimais e trocar ponto por vírgula

let number = 345.12322
console.log(number.toFixed(2).replace('.',',')) //o objeto retorna uma string

console.log(Number(number).toFixed(2).replace('.',',')) //aqui ele retorna NaN, por que number's não podem usar ','.