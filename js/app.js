console.log('Milestone-1')

const formElement = document.getElementById('form')
console.log(formElement)

let preventivo
let codicepromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'] // Array
const inputpromoElement = document.getElementById('promo') //input codice promo
let preventivopromo
const prezzoElement = document.getElementById('prezzo')



formElement.addEventListener('submit', function (event) {
    // blocco l'invio del form
    event.preventDefault()
    console.log('submit del form')
    // mi prendo la select del lavoro
    const selectElement = document.getElementById('work')
    console.log(selectElement)
    const selectwork = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectwork)

    // calcolo preventivo 

    if (selectwork == 1) {
        // prezzo per Backend Development (che ha il value 1 nella select)
        preventivo = parseFloat(10 * 20.50).toFixed(2) //number
        console.log(preventivo)

    } else if (selectwork == 2) {
        // prezzo per Frontend Development (che ha il valore 2 nella select)
        preventivo = parseFloat(10 * 15.30).toFixed(2) //number
        console.log(preventivo)

    } else {
        // prezzo per Data Analyst (che ha l'ultimo valore della select)
        preventivo = parseFloat(10 * 33.60).toFixed(2) //number
        console.log(preventivo)

    }

    // recupero il codice promo inserito
    const promo = inputpromoElement.value
    console.log(promo)
    // calcolo codice promo se incluso nell'array
    const promoOK = codicepromo.includes(promo) //Boolean 
    console.log(promoOK)

    // rimuovo ad ogni invio la classe che viene aggiunta
    inputpromoElement.classList.remove('is-valid', 'is-invalid')
    // calcolo il preventivo con eventuale codice promo valido

    if (promoOK === true) {
        preventivopromo = parseFloat(preventivo - (preventivo * 0.25)).toFixed(2) // number
        console.log(preventivopromo)
        // aggiungiamo la classe all'input in modo da mostrare il messaggio
        inputpromoElement.classList.add('is-valid')

    } else {
        preventivopromo = preventivo // number 
        console.log(preventivopromo)
        // aggiungiamo la classe all'input in modo da mostrare il messaggio
        inputpromoElement.classList.add('is-invalid')
    }


    prezzoElement.innerHTML = preventivopromo + ' €'

})
