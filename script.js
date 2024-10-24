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

let timeLeft = 5;
let generatedNumbers = []; // Array per memorizzare i numeri generati

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
    generatedNumbers.push(number); // Aggiungi il numero all'array

    //creo gli elementi li che andranno nella lista ul dell'HTML
    const listElement = document.createElement("li");
    listElement.textContent = number;

    //li aggiungo alla lista
    listNumbers.appendChild(listElement);
  }
}

//Stampo
randomNumber();

//! COMPARSA NUMERI RICORDATI
setTimeout(function () {
  const element = document.getElementById("answers-form");
  element.classList.remove("d-none");
}, 6000);

//! SCOMPARSA NUMERI RANDOM
setTimeout(function () {
  const element = document.getElementById("numbers-list");
  element.classList.add("d-none");
}, 6000);

//! INDOVINA IL NUMERO
document.getElementById("answers-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene il comportamento predefinito del modulo
    checkNumbers();
  });

function checkNumbers() {
  const inputs = document.querySelectorAll("#input-group input");
  let userNumbers = Array.from(inputs).map((input) => parseInt(input.value)); // Ottieni i valori inseriti
  let correctCount = 0;

  // Controlla quanti numeri l'utente ha indovinato
  userNumbers.forEach((num) => {
    if (generatedNumbers.includes(num)) {
      correctCount++;
    }
  });

  // Mostra il messaggio di risultato
  document.getElementById(
    "message"
  ).textContent = `Hai indovinato ${correctCount} numeri su 5!`;
}

//! FUNZIONE REFRESH DELLA PAGINA 

function refreshPage(){
    location.reload();
}

document.getElementById("refresh").addEventListener("click", function () {
refreshPage()
})