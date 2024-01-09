
// TODO Prendo gli elementi dalla pagina che mi servono
// TODO Raccolgo i dati degli input
// TODO Sommo i numeri dell'user e del computer
// TODO Scrivo in pagina il risultato

const userChoiceElement = document.getElementById('pari-o-dispari');
const userNumberElement = document.getElementById('user-number');
const form = document.querySelector('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userChoice = userChoiceElement.value;
    const userNumber = parseInt(userNumberElement.value);
    const CPUNumber = getRandomInteger(); 
    let message = 'La somma è dispari!'

    // logSomething(userChoice);
    // logSomething(userNumber);
    // logSomething(CPUNumber);

    const sum = isSumEven(userNumber, CPUNumber);

    if (sum) {
        message = 'la somma è pari'
    }

    logSomething(message)
    
    
})