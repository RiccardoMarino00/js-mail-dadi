// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  // Numero random giocatore
     console.log ( Math.floor(Math.random()*6) +1)
  // Numero random computer
     console.log( Math.floor(Math.random()*6) +1)
     
let dadoGiocatore = Math.floor(Math.random()*6) +1
let dadoComputer = Math.floor(Math.random()*6) +1

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
  // SE dado giocatore è uguale al dado del computer è pareggio
     if (dadoGiocatore === dadoComputer){
      console.log("Pareggio")
  // INVECE SE numero giocatore < di quello del computer allora quest'ultimo vince
     } else if (dadoGiocatore < dadoComputer){
      console.log("Il Computer ha vinto!")
  // ALTRIMENTI vince il giocatore
     } else {
       console.log("Il giocatore ha vinto")
     }
   
     

    
 