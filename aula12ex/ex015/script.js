function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value <= 0 || fano.value > ano) {
        window.alert('[ERRO] Alguns Dados estão inválidos. Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculcada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Kid
                img.setAttribute('src', 'babyM.png')
            } else if (idade < 21) {
                // Young
                img.setAttribute('src', 'youngM.png')
            } else if (idade < 50) {
                // Adult
                img.setAttribute('src', 'adultM.png')
            } else {
                // Old
                img.setAttribute('src', 'oldM.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Kid
                img.setAttribute('src', 'babyF.png')
            } else if (idade < 21) {
                // Young
                img.setAttribute('src', 'youngF.png')
            } else if (idade < 50) {
                // Adult
                img.setAttribute('src', 'adultF.png')
            } else {
                // Old
                img.setAttribute('src', 'oldF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}