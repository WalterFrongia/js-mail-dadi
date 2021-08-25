
// SEZIONE EMAIL

// 1. Chiedere email all'utente. 

let userEmail = prompt("Inserisci la tue email");
document.getElementById("email").innerHTML = userEmail;

// 2. Creare una lista con delle email certificate che possano accedere al sito.

let emailSaveSistem = [ "prima.email@libero.it", "seconda.email@libero.it", "terza.email@libero.it", "quarta.email@libero.it"];
console.log(emailSaveSistem);


// 3. Creare un messaggio appropriato per l'utente.

let trovato = false;
for(let i =0; i<4; i++){
    console.log(i);
    console.log(emailSaveSistem[i]);
    let emailCorrente = emailSaveSistem[i]
    if( emailCorrente == userEmail){
        trovato = true;
    }
}
 console.log(trovato);

 if(trovato == true ){
     alert("CORRETTO");
 }else{
     alert("NON CORRETTO");
 }


//  SEZIONE GIOCO DEI DADI

// Generare un numero random da 1 a 6.

// sia per il giocatore o giocatrice sia per il computer.

// Stabilire il vincitore o la vincitrice, in base a chi fa il punteggio più alto.

let numeroGiocatore = parseInt (prompt ("inserisci un numero da 1 a 6") );
console.log(numeroGiocatore);

let numeroComputer =  Math.floor(Math.random() * 6) + 1 ;
console.log(numeroComputer);

if(numeroGiocatore > 6){
    alert("Limite numero 6")
}else{
    if(numeroGiocatore > numeroComputer){
        console.log("ha vinto il giocatore");
    }else if( numeroComputer == numeroGiocatore){
        console.log("avete pareggiato");
    }else{
        console.log("ha vinto il computer");
    }
}