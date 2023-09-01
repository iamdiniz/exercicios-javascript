//console.log('Tudo bem?')

var c = 1

/* O do while testa condição no final
Resumidamente, obrigatoriamente vai ser executado o bloco.
*/

do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

/* Com o While no começo, existe a possibilidade de
   Não ser executado no começo, porque se a condição
   falhar, ele ja pula.
*/

// while (c <= 6) {
//    console.log(`Passo ${c}`)
//}