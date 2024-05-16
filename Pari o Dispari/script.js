// l'utente decide un numero compreso tra 1 e 5
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5:"));

// il computer decide un numero random compreso tra 1 e 5
let numeroComputer = generaNumeroCasuale(1, 5);




// Variabile per sommare i 2 numeri sia dell'utente che del computer
let somma = numeroUtente + numeroComputer;

// per il calcolo nella funzione
let risultato = verificaPariDispari(somma);







// Dichiarazione del vincitore
if ((numeroUtente % 2 === 0 && risultato === "pari") || (numeroUtente % 2 !== 0 && risultato === "dispari")) {
    console.log("Hai vinto!");
} else {
    console.log("Il computer ha vinto!");
}



// # Sezione Funzioni
// generare un numero random
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






// Funzione per verificare se un numero è pari o dispari
function verificaPariDispari(numero) {
    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
