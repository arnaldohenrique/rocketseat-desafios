//Manipulando Strings e Números

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = 'Paralelepipedo'
console.log(word.length) // 'length' conta quantos caracteres tem na string

let number = 1234
console.log(number.length) // 'length' não funciona em number's , teria que transforma-los em string antes.
console.log(String(number).length)