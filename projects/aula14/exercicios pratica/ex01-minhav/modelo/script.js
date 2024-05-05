function contar() {
    var txtinicio = document.getElementById('iinicio')
    var numinicio = Number(txtinicio.value)
    var txtfim = document.getElementById('ifim')
    var numfim = Number(txtfim.value)
    var txtpasso = document.getElementById('ipasso')
    var numpasso = Number(txtpasso.value)
    var numcontador = 0
    var resultado = 'O resultado e: '

    
    icontando.innerHTML = numpasso

    
    for (numinicio; numcontador >= numfim; numcontador += numpasso) {
        resultado += ` ${contador}`

        
    }

    icontando.innerHTML = resultado
}