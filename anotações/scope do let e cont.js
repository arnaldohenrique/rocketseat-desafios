/*
    *let e const

    - let e const são locais e só funcionam no scopo onde foram criadas
*/

let y = 1

{

    let y = 0
    console.log('> existe y?', y)
}

console.log('> existe y?', y)