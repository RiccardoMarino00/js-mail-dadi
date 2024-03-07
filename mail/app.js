console.log("Js")

// Creo una lista 
const emailRegistrateArray = ["riccardo@gmail.com", "luigi@outlook.it", "gabriel@hotmail.com"];
// Assegno una costante all'input
const inputEmailUser = document.getElementById("email")
// Assegno una costante al button
const inputButton = document.getElementById("send-button")
// Assegno una costante al html
const outPut = document.getElementById("output")

// Aggiungo un event listener al click sul button
inputButton.addEventListener("click", function () {
    // Creo una variabile di controllo per verificare se email coincide
    let areSameEmailInArray = false
    // Creo un ciclo per controllare presenza dell'email
    for (let i = 0; i < emailRegistrateArray.length; i++) {
        const emailRegistrata = emailRegistrateArray[i]



        // Prendo la value di inputEmailUser
        const inputEmailUser = email.value


        // Se email utente (inputEmailUser) è uguale a una delle email registrate (emailRegistrateArray)
        if (inputEmailUser === emailRegistrata) {
            areSameEmailInArray = true
        }
    }

    // Se email utente coincide
    if (areSameEmailInArray === true) {

        // Compare messaggio "può accedere"
        console.log("Puoi accedere")
        outPut.innerHTML = "Puoi accedere"


    } else {

        // Altrimenti Compare messaggio "non può accedere"
        console.log("Non puoi accedere")
        outPut.innerHTML = "Non puoi accedere"


    }





})



// stampa un messaggio appropriato sull’esito del controllo

