let numero = prompt("Digite um número:")
let tabuada = ""

for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${Number(numero) * i}\n`
}
alert(tabuada)


/* \n serve para quebrar a linha */

// i serve como um loop que vai de 1 a 10
