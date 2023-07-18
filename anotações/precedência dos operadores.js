// Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// De cima para baixo, do mais importante ao menos importante.

/*
    * grouping                      ( )
    * negação e incremento          ! ++ --
    * multiplicação e divisão       * /
    * adição e subtração            + -
    * relacional                    < <= > >=
    * igualdade                     == != === !==
    * AND                           && 
    * OR                            ||
    * condicional                   ?:
    * assignment (atribuição)       = += -= *= %=  
*/

console.log(2 + 5 * 10)
console.log((2 + 5) * 10)


console.log(3 > 2 > 1)
console.log(3 > 2 && 2 > 1)