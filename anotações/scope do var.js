/*
    *var

    - var é global e poderá funcionar fora de um escopo de bloco
*/

console.log('> existe x antes do bloco?', x)

{
    var x = 0   
}

console.log('> existe x depois do bloco', x)