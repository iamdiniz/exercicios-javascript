function contar() {
    let ini = document.getElementById('inicioId')
    let fim = document.getElementById('fimId')
    let passo = document.getElementById('passoId')
    let resultado = document.getElementById('resposta')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        resultado.innerHTML = 'Impossível contar! Você precisa inserir um número acima de 0'
        // alert('[ERRO] NÃO PODE COMEÇAR COM 0!!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}