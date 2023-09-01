function carregar() {
    var msg = window.document.getElementById('msg')
    var bom = window.document.getElementById('bom')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        bom.innerText = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        bom.innerText = 'Boa Tarde!'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        bom.innerText = 'Boa Noite!'
    }
}
