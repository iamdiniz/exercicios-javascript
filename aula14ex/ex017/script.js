function tabuada() {
    let num = document.getElementById('numId')
    let tab = document.getElementById('selectTabId')

    if (num.value == 0) {
        alert('Por favor, digite um número acima de 0!')
    } else {
        let n = Number(num.value)
        // let c = 1
        tab.innerHTML = ''

        // COM WHILE

        // while (c <= 10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        //     c++
        // }

        // COM FOR

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}