console.log ('Milestone-1')

const formElement = document.getElementById ('form')
console.log (formElement)

formElement.addEventListener('submit', function (event) {
    // blocco l'invio del form
    event.preventDefault()
    console.log('submit del form')
})