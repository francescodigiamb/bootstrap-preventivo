console.log('Milestone-1')

const formElement = document.getElementById('form')
console.log(formElement)

let preventivo
let promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'] // Array
let promoElement = document.getElementById('promo')


formElement.addEventListener('submit', function (event) {
    // blocco l'invio del form
    event.preventDefault()
    console.log('submit del form')
    // mi prendo la select del lavoro
    const selectElement = document.getElementById('work')
    console.log(selectElement)
    const selectwork = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectwork)

    // codice promo
    console.log(promoElement)

    // calcolo preventivo 

    if (selectwork == 1) {
        // prezzo per Backend Development (che ha il value 1 nella select)
        preventivo = 10 * 20.50
        console.log(preventivo)

    } else if (selectwork == 2) {
        // prezzo per Frontend Development (che ha il valore 2 nella select)
        preventivo = 10 * 15.30
        console.log(preventivo)

    } else {
        // prezzo per Data Analyst (che ha l'ultimo valore della select)
        preventivo = 10 * 33.60
        console.log(preventivo)

    }


})
