//Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// - Pensate prima in italiano.
// - Dividete in piccoli problemi la consegna.
// - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

let timeLeft = 30;

//!CREAZIONE COUNTDOWN
function countDown() {
  const timer = setInterval(() => {
    document.getElementById("countdown").textContent = timeLeft;

    // Correggere la condizione per fermare il timer
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").textContent = "Tempo Scaduto!";
    }

    timeLeft--;
  }, 1000);
}

// Iniziare il countdown
countDown();

//!GENERAZIONE CASUALE DI NUMERI

const listNumbers = document.getElementById("numbers-list");

function randomNumber() {
  //inizializzo un ciclo per generare 5 numeri random
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 50) + 1;

    //creo gli elementi li che andranno nella lista ul dell'HTML 
    const listElement = document.createElement("li");
    listElement.textContent = number;

    //li aggiungo alla lista
    listNumbers.appendChild(listElement);
  }
}
//Stampo
randomNumber();
