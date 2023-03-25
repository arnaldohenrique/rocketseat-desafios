/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

//type coersion - JS transformou o 5(number) em 5(string) para fazer a concatenação sem problemas. 
console.log('9' + 5) //o js transformou o number em string, 5 para '5'.

//type conversion - 
console.log(Number('9') + 5)// aqui eu que mandei o js mudar a string para um number.
