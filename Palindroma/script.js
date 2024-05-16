// l'utente inserisce una parola qualsiasi
let parola = prompt("Inserisci una parola:");



// Verifichiamo se la parola inserita è un palindromo e stampiamo il risultato
if (verificaPalindromo(parola) = true) {
    console.log(parola + " è un palindromo.");
} if (verificaPalindromo(parola) = false) {
    console.log(parola + " non è un palindromo.");
} else{
    console.log('la parola inserita dall utente non e valida!');
}





// # Sezione Funzione
function verificaPalindromo(parola) {

    //indice per l'inizio della parola
    let inizio = 0;

    //indice per la fine della parola
    let fine = parola.length - 1;



    // Utilizziamo un ciclo for per confrontare ogni carattere con l'altro lato della parola
    for (let i = 0; i < parola.length / 2; i++) {
        // Se i caratteri corrispondenti non sono uguali, la parola non è un palindromo
        if (parola[inizio] !== parola[fine]) {
            return false;
        }
        // aumentiamo l'indice per l'inizio della parola e decrementiamo l'indice per la fine della parola
        inizio++;
        fine--;
    }
    // Se il ciclo è completato senza trovare differenze, allora è palindroma
    return true;
}
