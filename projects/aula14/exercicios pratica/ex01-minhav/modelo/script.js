
function contar() {
    var txtinicio = document.getElementById('iinicio')
    var numinicio = Number(txtinicio.value )
    var txtfim = document.getElementById('ifim')
    var numfim = Number(txtfim.value)
    var txtpasso = document.getElementById('ipasso')
    var numpasso = Number(txtpasso.value)
    var numcontador = numpasso
    var resultado = 'O resultado e: '

    
    /* icontando.innerHTML = numpasso */

    if (numinicio >= numfim || numpasso >= numfim) {
        icontando.innerHTML = `Você digitou valores invalidos.`
    } else if (numcontador == 0){
        numcontador = 1
        numpasso = 1
        for (numinicio; numcontador <= numfim; numcontador += numpasso) {
            resultado += ` ${numcontador} 👉`
        }
        icontando.innerHTML = `${resultado} Fim`
    } else {
        for (numinicio; numcontador <= numfim; numcontador += numpasso) {
            resultado += ` ${numcontador} 👉`
        }
        icontando.innerHTML = `${resultado} Fim`
    }
}