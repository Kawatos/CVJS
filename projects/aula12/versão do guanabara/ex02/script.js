function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')

    if (fano.value.length = 0 || fano.value > ano) {
        window.alert('Sim, e eu sou a Chapeuzinho.') // o primeiro parametro, fano.value.length == 0, testa se o ano esta vazio.
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'imagens/bebemenino.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'imagens/bebemenina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}