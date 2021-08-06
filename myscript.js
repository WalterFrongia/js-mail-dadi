
// SEZIONE EMAIL

// 1. Chiedere email all'utente. 

let userEmail = prompt("Inserisci la tue email")
document.getElementById("email").innerHTML = userEmail

// 2. Creare una lista con delle email certificate che possano accedere al sito.

let emailSaveSistem = [ "prima.email@libero.it", "seconda.email@libero.it", "terza.email@libero.it", "quarta.email@libero.it"];
console.log(emailSaveSistem);


// 3. Creare un messaggio appropriato per l'utente.

if(userEmail != emailSaveSistem[0]){
    for( var i = 0; i<4; i++){
        alert("ERRORE QUESTA EMAIL NON E' NEL SISTEMA")
    }

} else{
    alert("EMAIL CORRETTA")
}