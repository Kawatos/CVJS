/* var c = 1
while (c < 6) {
    console.log('GG')
    c++
}

do {
    console.log('GG2')
    c++
} while (c < 12) */



var numinicio = 1
var numfim = 10
var numpasso = 1
var numcontador = 0
var resultado = 'O resultado e: '



for (numinicio; numcontador <= numfim; numcontador += numpasso) {
    resultado += ` ${numcontador}`
    console.log(numcontador)
}

