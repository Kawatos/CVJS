function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if ( hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'Imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if ( hora >= 12 && hora < 18) {
        //boa tarde
        document.body.style.background = '#b986f'
        img.src = 'Imagens/tarde.png'
    } else {
        //boa noite
        document.body.style.background = '#515154'
        img.src = 'Imagens/noite.png'
    }
}


