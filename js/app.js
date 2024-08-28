console.log('Milestone-1')


let preventivo
let preventivopromo
const backendprice = 20.50 // number
const frontendprice = 15.30 //number
const dataanalystprice = 33.60 //number
const workoptions = [{ text: 'Backend Development', value: 1 }, { text: 'Frontend Development', value: 2 }, { text: 'Data Analyst', value: 3 }]
const codicepromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'] // Array string
const inputpromoElement = document.getElementById('promo') //input codice promo
const prezzoElement = document.getElementById('prezzo')

const formElement = document.getElementById('form')
console.log(formElement)

const selectElement = document.getElementById('work')
console.log(selectElement)

// BONUS
// iterazione array di oggetti 
for (let index = 0; index < workoptions.length; index++) {
    // creazione elemento option
    const option = document.createElement('option');
    // inserimento dinamico di value usando l'elemento corrente dell'array (in questo caso workoptions di index) 
    option.setAttribute('value', workoptions[index].value);
    // inserimento dinamico del testo 
    option.textContent = workoptions[index].text;
    console.log(option)
    // 'appendo' la option creata dinamicamente alla select element
    selectElement.appendChild(option)

}


formElement.addEventListener('submit', function (event) {
    // blocco l'invio del form
    event.preventDefault()
    console.log('submit del form')
    // mi prendo la select del lavoro
    const selectwork = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectwork)

    // calcolo preventivo 

    if (selectwork == 1) {
        // prezzo per Backend Development (che ha il value 1 nella select)
        preventivo = parseFloat(10 * backendprice).toFixed(2) //number
        console.log(preventivo)

    } else if (selectwork == 2) {
        // prezzo per Frontend Development (che ha il valore 2 nella select)
        preventivo = parseFloat(10 * frontendprice).toFixed(2) //number
        console.log(preventivo)

    } else {
        // prezzo per Data Analyst (che ha l'ultimo valore della select)
        preventivo = parseFloat(10 * dataanalystprice).toFixed(2) //number
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
